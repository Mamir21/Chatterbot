'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithGoogle } from '../utils/auth';
import { Button } from '@mui/material';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase';

export default function SignInButton() {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (!loading && user) {
      router.push('/Bot');
    }
  }, [user, loading, router]);

  const handleGoogleSignIn = async () => {
    try {
      const user = await signInWithGoogle();
      if (user) {
        alert('Signed in successfully');
        router.push('/Bot');
      }
    } catch (error) {
      alert('Error signing in with Google: ' + error.message);
    }
  };

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={handleGoogleSignIn}
      style={{ backgroundColor: '#33292900', color: '#674B4B', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <img src="/images/google-logo.png" alt="Google Logo" style={{ width: '20px', marginRight: '8px', borderRadius: '35%' }} />
      Sign In
    </Button>
  );
}
