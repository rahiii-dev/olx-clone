import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

export const useAuth = () => { 
    return useContext(AuthContext)
};

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);


  return (
  <AuthContext.Provider value={{currentUser}}>
    {children}
  </AuthContext.Provider>);
};

export default AuthContextProvider;
