// import Header from '../components/header';
// import Footer from '../components/footer';
// import Aboutpage from '../components/aboutpage';
import ProtectedRoute from "../components/ProtectedRoute"

export default function About() {
  return (
    <ProtectedRoute>
    <div>
      <h1>ABOUT</h1>
    </div>
    </ProtectedRoute>
  )
}