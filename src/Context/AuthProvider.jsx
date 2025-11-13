import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Auth/Firebase/Firebase.config';


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    // Google Login
    const googleProvider = new GoogleAuthProvider;
    const loginWithGoogle = () => {
        setLoading(true);
         return signInWithPopup(auth, googleProvider);
    }



    // Email & Password Login
    const loginWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }



    // Registar With Email & Password
    const singUpWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // Logout User
    const logOutUser = () => {
        setLoading(true)
        return signOut(auth);
    }


    // User Set On Auth State Changed
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })

        return () => unSubscribe();
    }, [])
    


    

    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        loginWithEmail,
        singUpWithEmail,
        loginWithGoogle,
        logOutUser
    }
    
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;