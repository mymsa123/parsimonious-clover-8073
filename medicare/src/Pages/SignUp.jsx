import GoogleButton from "react-google-button"
import { useState, useContext } from 'react';
import { AuthContext } from '../context/Authcontext';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
} from '@chakra-ui/react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseauth';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { ArrowBackIcon } from '@chakra-ui/icons';


interface RegisterForm {
  email: string;
  password: string;
}

const SignUp = () => {
  const navigate=useNavigate()
  const { isAuthenticated } = useContext(AuthContext);
  const [registerForm, setRegisterForm] = useState<RegisterForm>({
    email: '',
    password: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRegisterForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(registerForm.email,registerForm.password)
    createUserWithEmailAndPassword(auth,registerForm.email,registerForm.password)
    .then((res)=>{
      console.log(res)
      navigate("/login")
    })
    .catch((error)=>{
      console.log(error)
    })
  };
 
const handleGoBack=()=>{
  navigate(-1)
}

// Function to handle Google sign-in
const handleGoogleSignIn = async () => {
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    console.log('Google sign-in success:', result.user);
    navigate('/login'); 
  } catch (error) {
    console.error('Google sign-in error:', error);
  }
};

  return (
    <Box maxWidth="sm" mx="auto" p={4}  borderColor="gray.200" boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px" marginTop={"5%"} >
      <Heading mb={4} color={"#010008"}>Register</Heading>
      <form onSubmit={handleSubmit} >
        <Stack spacing={3}>
          <FormControl id="email" isRequired>
            <FormLabel>Email ID</FormLabel>
            <Input
              type="text"
              name="email"
              placeholder='Email Id'
              value={registerForm.email}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Stack spacing={3}>
            <Input
              type="password"
              name="password"
              value={registerForm.password}
              onChange={handleInputChange}
              variant='outline' placeholder='password'
             h={"40px"}
            />

            </Stack>
            
          </FormControl>

          <Box >
          <Button type="submit" colorScheme="143dc4"  bg="#143dc4" color={"white"} width={"240px"} justifyContent={"center"}>
          SignUp
          </Button>
          </Box>
          <Box justifyItems={"center"} marginLeft={"162px"}>
          <FormLabel>Or</FormLabel>
          </Box>
          <Box paddingLeft={"55px"} mt={4}>
          <GoogleButton onClick ={handleGoogleSignIn} />
          </Box>
          
        </Stack>
        <Box w="100px">
        <button onClick={handleGoBack}> <br/> <ArrowBackIcon marginRight={"10px"}/>Back</button>
        </Box>
      </form>
      
      
    </Box>
  );
};

export default SignUp;


