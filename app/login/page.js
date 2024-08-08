'use client';
import { useRouter } from 'next/navigation';
import { signInWithGoogle } from '../services/auth';
import { Button, Box } from '@mui/material';
import { auth } from '@/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from 'react';

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
    <Box
    display={'flex'}
    justifyContent={'center'}
    alignItems={'center'}
    >
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
  );
}
