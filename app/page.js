'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Home } from './home/page';
import { Login } from './login/page.js';
 
export default function Page() {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.push('/home'); 
    }
  }, [user, loading, router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Login />; 
  }
  return (
      <ProtectedRoute>
        <Home/>
     {/* Include all the routes that will be protected inside of the ProtectedRoute */}
     {/*/chatbot*/}
      {/*Any feature that doesn't require the user to SignIn */}
      </ProtectedRoute>
  );
}