import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail
} from "firebase/auth";

import { auth } from "../firebaseconfig/firebase";
//--------------------
export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is not auth provider");
  return context;
};

export const loginWhithGoogle = () => {
  const googleProvider = new GoogleAuthProvider();
  /*return */ signInWithPopup(auth, googleProvider)
    // .then(function (response) {
    //   console.log("respons");
    // })
    // .cath(function (error) {
    //   console.log("error");
    // });
};

const resetPassword = (email) =>{
 sendPasswordResetEmail(auth, email)
}


export function AuthProvider({ children }) {
  const signup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);
  const login = async (user) => {
    console.log(user)
    const { data } = await axios.post('http://localhost:1337/api/auth/local', {
      identifier: user.email,
      password: user.password,
    })
    return data
  }
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const logout = () => {signOut(auth)};

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubcribe();
    // console.log("auth provider loader");
  }, []);

  return (
    <authContext.Provider
      value={{ signup, login, user, logout, loading, loginWhithGoogle,resetPassword }}
    >
      {children}
    </authContext.Provider>
  );
}
