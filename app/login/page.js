'use client';
import { useRouter } from 'next/navigation';
import { signInWithGoogle } from '../services/auth';
import { Button, Box, Typography } from '@mui/material';
import { auth } from '@/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from 'react';
import cover from "../../public/images/gradient-connection-background.jpg"

export default function Login() {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (!loading && user) {
      router.push('/home');
    }
  }, [user, loading, router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (user) {
    return null;
  }

  const handleGoogleSignIn = async () => {
    try {
      const user = await signInWithGoogle();
      if (user) {
        alert('Signed in successfully');
        router.push('/home');
      }
    } catch (error) {
      alert('Error signing in with Google: ' + error.message);
    }
  };

  return (
    <Box width="100vw" 
    height="100vh" 
    display="flex"
    // need to set background
    sx={{
      // backgroundImage: "url('https://lh3.googleusercontent.com/MOf9Kxxkj7GvyZlTZOnUzuYv0JAweEhlxJX6gslQvbvlhLK5_bSTK6duxY2xfbBsj43H=w300')"
      // backgroundImage: "../../public/images/gradient-connection-background.jpg"
    }}
    >

<Box
      width="250px" 
      // height="100vh" 
      border="1px solid #333"
      borderRadius="8px"
      bgcolor={'lightblue'}
      position="absolute"
      // justifyContent="center"
      // alignItems="center"
      left="300px"
      top="500px"
      p={1}

      >
        <h1>Bot:</h1>
        <Typography>-------------------------------------</Typography>
        <Typography fontSize="30px" position="relative" alignContent="center"
        alignItems="center"
        justifyContent="center"
        justifyItems="center"
        >
          Based on the Llama model, we out here with the Chatterbot
          </Typography>
      </Box>

      <Box
      width="250px" 
      // height="100vh" 
      border="1px solid #333"
      borderRadius="8px"
      bgcolor={'lightblue'}
      position="absolute"
      // justifyContent="center"
      // alignItems="center"
      left="975px"
      top="100px"
      p={1}

      >
        <h1>Bot2:</h1>
        <Typography>-------------------------------------</Typography>
        <Typography fontSize="30px" position="relative" alignContent="center"
        alignItems="center"
        justifyContent="center"
        justifyItems="center"
        >
          Based on the Llama model, we out here with the Chatterbot
          </Typography>
      </Box>

      <Box
      width="250px" 
      // height="100vh" 
      border="1px solid #333"
      borderRadius="8px"
      bgcolor={'lightblue'}
      position="absolute"
      // justifyContent="center"
      // alignItems="center"
      right="300px"
      top="500px"
      p={1}

      >
        <h1>Bot3:</h1>
        <Typography>-------------------------------------</Typography>
        <Typography fontSize="30px" position="relative" alignContent="center"
        alignItems="center"
        justifyContent="center"
        justifyItems="center"
        >
          Based on the Llama model, we out here with the Chatterbot
          </Typography>
      </Box>

    <Box 
      width="100vw" 
      height="100vh" 
      display="flex" 
      flexDirection="column"
      justifyContent="center" 
      alignItems="center" 
      gap={2}
    >
     <Typography position="relative" fontSize="75px" color="lightblue">Chatterbot</Typography> 
      <Box
      // width="100vw" 
      // height="100vh" 
      display={'flex'}
      flexDirection="column"
      justifyContent={'center'}
      alignItems={'center'}
      border="1px solid #333"
      borderRadius="8px"
      p={3}
      bgcolor={'lightblue'}
      >
        <h1>Sign Up / Log In</h1>
        <Typography>---------------------------------------------------------</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleGoogleSignIn}
          style={{ backgroundColor: '#33292900', color: '#674B4B', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <img src="/images/google-logo.png" alt="Google Logo" style={{ width: '20px', marginRight: '8px', borderRadius: '35%' }} />
          Sign In with Google
        </Button>
      </Box>
    </Box>
    </Box>
  );
}


