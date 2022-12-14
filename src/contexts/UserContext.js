import React, { createContext, useEffect, useState } from 'react';
import {
    getAuth,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    updateProfile,
    signInWithPopup,
    sendEmailVerification,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    GithubAuthProvider,
} from 'firebase/auth'
import app from '../firebase/firebase.init';

const auth = getAuth(app)
export const AuthContext = createContext()

const UserContext = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    // 1. Create User
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // 2. Update Name

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    // 3. Email Verify
    const verifyEMail = () => {
        setLoading(true)
        return sendEmailVerification(auth.currentUser)
    }

    // 4. Google Sign Up
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // Github Login
    const signInWithGithub = () => {
        setLoading(true)
        return signInWithPopup(auth, gitHubProvider)
    }

    // 5. LogOut
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // 6. Login In with password
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }



    // 7. forget password
    const resetPassword = (email) => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }






    useEffect(() => {
        // eta run hobe jokhn component mount hobe
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })


        return () => {
            // eta run hobe jokhon component unmount hobe
            unsubscribe()

        }
    }, [])


    const authInfo = {
        user,
        createUser,
        updateUserProfile,
        verifyEMail,
        signInWithGoogle,
        signInWithGithub,
        logOut,
        signIn,
        resetPassword,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;