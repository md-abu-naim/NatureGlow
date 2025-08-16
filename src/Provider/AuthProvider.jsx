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
import useAxiosCommon from "../Hooks/useAxiosCommon";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const fbProvider = new FacebookAuthProvider();

const AuthProvider = ({ children }) => {
    const [recentUser, setRecentUser] = useState({})
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const axiosCommon = useAxiosCommon()

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

    const LogoutUser = async () => {
        setLoading(true);
        try {
            if (recentUser?._id) {
                await axiosCommon.put(`/user/${recentUser?._id}`, { ...recentUser, status: 'Inactive' });
            }
        } finally {
            localStorage.removeItem('token');
            signOut(auth);
        }
    };


    const resetPassword = (email) => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                const userInfo = { email: currentUser.email };
                axiosCommon.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('token', res.data.token);
                            setUser(currentUser);
                        }
                    })
            }
            else {
                localStorage.removeItem('token');
                setUser(null);
            }
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, [axiosCommon])


    useEffect(() => {
        if (!user?.email) return
        axiosCommon.get(`/user/${user?.email}`,)
            .then(res => {
                setRecentUser(res.data)
            })
    }, [axiosCommon, user?.email])

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

