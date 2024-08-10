import ChatBot from '../components/botpage';
import Navbar from '../components/Navbar';
import ProtectedRoute from '../components/ProtectedRoute';


export default function Bot() {
  return (
    <>
    <ProtectedRoute>
      <Navbar />
      <>
      <ChatBot />
      </>
      </ProtectedRoute>
    </>
  )
}