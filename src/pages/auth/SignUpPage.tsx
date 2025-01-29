import { Box, Button, Flex, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from '@mantine/form';
import './styles/loginPage.css';
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from "react-icons/fa";
import { useState } from "react";
import AnimatedPage from "../../animation/AnimatedPage";





function SignUpPage() {
    const loginForm = useForm({
        mode: 'uncontrolled',
        initialValues: { fullName: '', email: '', password: '' },
    
        validate: {
          fullName:(value) => {
            if (value.trim().length < 4) {
              return 'Full name cannot be less than 5 characters'
            }
            if (!value.trim().includes(' ')) {
              return 'Add a second name'
            }
            else{
              return null
            }
          },
          email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
          password: (value) => (value.length < 5? 'Your password must be more than 4 character' : null),
        },
      });
      const [loading, setLoading] = useState<boolean>(false)
      const signUp = ()=>{
        console.log(loginForm.isValid());
        setLoading(false)
        if (loginForm.isValid()) {
            setLoading(true);
            document.location.href = '/'
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
                <Button size="lg" leftSection={<FcGoogle/>} btn-name="googleBtn">
                    Sign up with Google
                </Button>
                <Button size="lg" btn-name="appleBtn">
                    <FaApple/>
                </Button>
                <Button size="lg" btn-name="facebookBtn">
                    <FaFacebook/>
                </Button>
            </Box>
            <form action="" onSubmit={loginForm.onSubmit(
                signUp
            )}>
               <TextInput
                  input-type="text"
                    size="lg"
                    label='Full name'
                    placeholder="John Doe"
                    key={loginForm.key('fullName')}
                    {...loginForm.getInputProps('fullName')}
                />
                <TextInput
                    input-type="text"
                    size="lg"
                    label='Email'
                    placeholder="geraldlekara19@gmail.com"
                    key={loginForm.key('email')}
                    {...loginForm.getInputProps('email')}
                />
                <PasswordInput
                    size="lg"
                    label='Password'
                    placeholder="*********"
                    key={loginForm.key('password')}
                    {...loginForm.getInputProps('password')}
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
