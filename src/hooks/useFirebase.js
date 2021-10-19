import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import initFirebase from "../pages/Login/firebase/firebase.init";

initFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);


    const GoogleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    // Google Sign In 

    const signInWithGoogle = () => {
        setIsLoading(false);
        return signInWithPopup(auth, GoogleProvider)

    }

    // Google SignOut 

    const googleSignOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                console.log(user)
                setUser({});
                console.log(user)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    // Observer 

    useEffect(() => {
        setIsLoading(true);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                console.log(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false)
        })
    }, [])

    // Create User 

    const createUserWithEmailPassword = (email, password, name, redirect) => {
        console.log(redirect, name);
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password,)
            .then(res => {
                updateProfile(auth.currentUser, { displayName: name })
                    .then(() => {
                        setUser(res.user);
                    });
            })
            .catch(error => {
                setError(error.message);
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false)
            })


    }

    // Sign in user 

    const signInUserWithEmailPassword = (email, password) => {
        setIsLoading(false);
        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                setUser(res.user);
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    return {
        user,
        setUser,
        error,
        setError,
        signInWithGoogle,
        googleSignOut,
        createUserWithEmailPassword,
        signInUserWithEmailPassword,
        isLoading,
        setIsLoading,
    }
}

export default useFirebase;


