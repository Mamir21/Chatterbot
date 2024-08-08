// import Header from '../components/header';
// import Footer from '../components/footer';
// import Home from '../components/homepage';
import ProtectedRoute from "../components/ProtectedRoute"

export default function Home() {
    return (
      <ProtectedRoute>
      <div>
        <h1>Home</h1>
      </div>
      </ProtectedRoute>
    )
  }