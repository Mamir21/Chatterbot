'use client'
// import Header from '../components/header';
// import Footer from '../components/footer';
// import Home from '../components/homepage';
import { Box, TextField, Button } from "@mui/material";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {auth} from '../../firebase.js'

export default function Login() {
    const handleGoogle = async (e) => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    }

    return (
        <div>
            <Button onClick={handleGoogle}>
                Sign In with Google
            </Button>
        </div>
    )
  }