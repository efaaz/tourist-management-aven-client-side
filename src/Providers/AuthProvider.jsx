import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  updateProfile as updateProfileFirebase, // Alias to avoid name conflict
} from "firebase/auth";
import { auth } from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();
  const GitHubProvider = new GithubAuthProvider();

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const googleSignin = () => {
    return signInWithPopup(auth, provider);
  };

  const gitHubSignin = () => {
    return signInWithPopup(auth, GitHubProvider);
  };

  const updateProfile = async (displayName, photoURL) => {
    setLoading(true);
    try {
      await updateProfileFirebase(auth.currentUser, { displayName, photoURL });
      // Update the local user object
      setUser((prevUser) => ({
        ...prevUser,
        displayName,
        photoURL,
      }));
    } catch (error) {
      throw new Error("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    signUp,
    signIn,
    googleSignin,
    gitHubSignin,
    logOut,
    updateProfile,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;