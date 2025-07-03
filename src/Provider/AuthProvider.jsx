import { auth } from "../Firebase/Firebase.config";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { 
 createUserWithEmailAndPassword,onAuthStateChanged,
 signInWithEmailAndPassword,
  } from "firebase/auth";
export const AuthContext = createContext(null)
// const googleProvider = new GoogleAuthProvider()
// const githubProvider = new GithubAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // const signInwithGoogle = () => {
    //     setLoading(true)
    //     return signInWithPopup(auth, googleProvider)
    // }

    // const signInwithgithub = () => {
    //     setLoading(true)
    //     return signInWithPopup(auth, githubProvider)
    // }

    // const updateUser = (name, photoURL) => {
    //     setLoading(true)
    //     return updateProfile(auth.currentUser, {
    //         displayName: name,
    //         photoURL: photoURL
    //     })
    // }

    // const logOutUser = () => {
    //     setLoading(true)
    //     .then(data => console.log(data.data))
    //     return signOut(auth)
    // }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unSubscribe()
    }, [])

    const authInfo = {createUser, loginUser,
     loading, user, setUser, }
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

