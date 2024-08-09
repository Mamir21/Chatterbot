// import Header from '../components/header';
// import Footer from '../components/footer';
import Homepage from '../components/homepage';

import ProtectedRoute from "../components/ProtectedRoute"

export default function Home() {
    return (
      <ProtectedRoute>
      <>
      <Homepage />
      </>
      </ProtectedRoute>
    )
}