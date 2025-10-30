import { Box, Button, Flex, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from '@mantine/form';
import './styles/loginPage.css';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from "react-icons/fa";
import { useEffect, useState } from "react";
import AnimatedPage from "../../animation/AnimatedPage";
import { useAuth } from "../../server/context/authContext";
import { signUpDTO } from "../../server/dto/authDTO";





function SignUpPage() {

  const signUpForm = useForm({
    mode: 'uncontrolled',
    initialValues: { fullName: '', email: '', password: '' },

    validate: {
      fullName: (value:string) => {
        if (value.trim().length < 4) {
          return 'Full name cannot be less than 5 characters'
        }
        if (!value.trim().includes(' ')) {
          return 'Add a second name'
        }
        else {
          return null
        }
      },
      email: (value:string) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value:string) => (value.length < 5 ? 'Your password must be more than 4 character' : null),
    },
  });
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState<boolean>(false)
    const from = (location.state as any)?.from?.pathname || "/admin";

const formValues = signUpForm.getValues()
const formData: signUpDTO = {
    email: formValues.email,
    password: formValues.password,
    displayName: formValues.fullName
  };

useEffect(()=>{
  console.log(formData)
}, [formData])


  const signUpUser = async () => {
  
    try{
      console.log(formData);
      // setLoading(true)
      const res = await signUp(formData);
      console.log(res);
      navigate(from, {replace: true})
    }catch(e){
      console.log("sign up Error:", e)
      setLoading(false)
    }
  }

  return (
    <>
      <AnimatedPage>
        <Box className="loginPage">
          <Box className="loginFormCon">
            <Box>
              <h1>Sign up to CrimeRec</h1>
              <p></p>
            </Box>
            <Box className="loginOptions">
              <Button size="lg" leftSection={<FcGoogle />} btn-name="googleBtn">
                Sign up with Google
              </Button>
              <Button size="lg" btn-name="appleBtn">
                <FaApple />
              </Button>
              <Button size="lg" btn-name="facebookBtn">
                <FaFacebook />
              </Button>
            </Box>
            <form action="" onSubmit={signUpForm.onSubmit(
              signUpUser
            )}>
              <TextInput
                input-type="text"
                size="lg"
                label='Full name'
                placeholder="John Doe"
                key={signUpForm.key('fullName')}
                {...signUpForm.getInputProps('fullName')}
              />
              <TextInput
                input-type="text"
                size="lg"
                label='Email'
                placeholder="geraldlekara19@gmail.com"
                key={signUpForm.key('email')}
                {...signUpForm.getInputProps('email')}
              />
              <PasswordInput
                size="lg"
                label='Password'
                placeholder="*********"
                key={signUpForm.key('password')}
                {...signUpForm.getInputProps('password')}
              />
              <Button disabled={loading} size="lg" type="submit">
                Create an account
              </Button>
            </form>
            <Flex className="goToSignUp">
              <p>Already have an account? </p>
              <Link to={'/auth/login'}>Log in</Link>
            </Flex>
            {/* <Transitiog */}
          </Box>
        </Box>
      </AnimatedPage>

    </>
  )
}

export default SignUpPage
