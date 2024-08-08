// import header from '../components/header';
// import footer from '../components/footer';
import ChatBot from '../components/botpage';
import ProtectedRoute from '../components/ProtectedRoute';


export default function Bot() {
  return (
    <>
    <ProtectedRoute>
      <ChatBot />
      </ProtectedRoute>
    </>
  )
}