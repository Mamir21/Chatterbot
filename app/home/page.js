// import Footer from '../components/footer';
import Navbar from '../components/Navbar';
import Homepage from '../components/homepage';
import ProtectedRoute from "../components/ProtectedRoute"

export default function Home() {
    return (
     <ProtectedRoute>
    <>
      <Navbar />
      <>
      <Homepage />
      </>
    </>
    </ProtectedRoute>
    )
}