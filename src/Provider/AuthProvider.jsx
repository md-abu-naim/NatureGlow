import { auth } from "../Firebase/Firebase.config";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import {
    createUserWithEmailAndPassword, EmailAuthProvider, FacebookAuthProvider, GoogleAuthProvider, onAuthStateChanged,
    reauthenticateWithCredential,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updatePassword,
    updateProfile,
} from "firebase/auth";
export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const fbProvider = new FacebookAuthProvider();

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

    const fbLogin = () => {
        setUser(true)
        return signInWithPopup(auth, fbProvider)
    }

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

    const reauthencticateUser = (currentUser) => {
        const user = auth.currentUser
        const credential = EmailAuthProvider.credential(user.email, currentUser)
        return reauthenticateWithCredential(user, credential)
    }

    const passwordUpdate = (newPassword) => {
        setLoading(true)
        return updatePassword(auth.currentUser, newPassword)
    }

    const LogoutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    const resetPassword = (email) => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(() => {
        const unSubsCribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unSubsCribe()
    })

    const authInfo = {
        createUser, loginUser, updateUser, passwordUpdate, reauthencticateUser,
        loading, user, setUser, LogoutUser, signInWithGoogle, fbLogin, resetPassword
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

