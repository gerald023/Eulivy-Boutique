import { Box, Button, Flex, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from '@mantine/form';
import './styles/loginPage.css';
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from "react-icons/fa";
import { useState } from "react";
import AnimatedPage from "../../animation/AnimatedPage";





function LoginPage() {
    const loginForm = useForm({
        mode: 'uncontrolled',
        initialValues: { email: '', password: '' },
    
        validate: {
          email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
          password: (value) => (value.length < 5? 'Your password must be more than 4 character' : null),
        },
      });
      const [loading, setLoading] = useState<boolean>(false)
      const login = ()=>{
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
            <h1>Log in to CrimeRec</h1>
            <p></p>
            </Box>
            <Box className="loginOptions">
                <Button size="lg" leftSection={<FcGoogle/>} btn-name="googleBtn">
                    Log in with Google
                </Button>
                <Button size="lg" btn-name="appleBtn">
                    <FaApple/>
                </Button>
                <Button size="lg" btn-name="facebookBtn">
                    <FaFacebook/>
                </Button>
            </Box>
            <form action="" onSubmit={loginForm.onSubmit(
                login
            )}>
                <TextInput
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
                <Box className="forgetPass">
                    <Link to={''}>Forgot password?</Link>
                </Box>
                <Button disabled={loading} size="lg" type="submit">
                    Login
                </Button>
            </form>
            <Flex className="goToSignUp">
                <p>Don't have a account? </p>
                <Link to={'/auth/sign-up'}>Sign up</Link>
            </Flex>
            {/* <Transitiog */}
        </Box>
      </Box>
    </AnimatedPage>
     
    </>
  )
}

export default LoginPage
