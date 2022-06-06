import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthorize, setIsAuthorize] = useState(false);

  const login = () => {
    setIsAuthorize(true);
    localStorage.setItem("isAuth", true)
  }

  const logOut = () => {
    setIsAuthorize(false);
    localStorage.setItem("isAuth", "")
  }

  useEffect(()=>{
    const x = localStorage.getItem("isAuth");
    setIsAuthorize(x);
  },[])

  return( 
  <AuthContext.Provider value={ {isAuthorize, login, logOut } } >
    {children}
  </AuthContext.Provider>);
};
