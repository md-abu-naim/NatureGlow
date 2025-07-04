import { auth } from "../Firebase/Firebase.config";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import {
    createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // const signInwithGoogle = () => {
    //     setLoading(true)
    //     return signInWithPopup(auth, googleProvider)
    // }

    // const signInwithgithub = () => {
    //     setLoading(true)
    //     return signInWithPopup(auth, githubProvider)
    // }

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const updateUser = (name, photoURL) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL
        })
    }

    const LogoutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubsCribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unSubsCribe()
    })

    const authInfo = {
        createUser, loginUser, updateUser,
        loading, user, setUser, LogoutUser, signInWithGoogle
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;

