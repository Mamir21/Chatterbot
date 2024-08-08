'use client'
// import Header from '../components/header';
// import Footer from '../components/footer';
// import Home from '../components/homepage';
import { useState, useEffect } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from '@/firebase'
import { useAuthState } from "react-firebase-hooks/auth";

export default function Login() {
    const [user, setUser] = useAuthState(auth)
    
    // useEffect(() => {
    //     return onAuthStateChanged(auth, (user) => setUser(user))
    // }, [])

    const handleGoogle = async (e) => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    }

    const out = async (e) => {
        return auth.signOut();
    }

    if (!user) 
    {
        return (
            <div>
                <Button onClick={handleGoogle}>
                    Sign In with Google
                </Button>
            </div>
        )
    }
    else
    {
        return (
            <div>
                <Typography>
                    Signed in
                </Typography>
                <Button onClick={out}>
                    Sign Out
                </Button>
            </div>
        )
    }
  }