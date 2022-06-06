import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";



const RequiredAuth = ({ children }) => {
  const { isAuthorize } = useContext(AuthContext);
  const { pathname } = useLocation();

  if(isAuthorize){
    return children;
  }else{
    return <Navigate to="/login" state={{from: pathname}} />
  }


  // return children;
};

export default RequiredAuth;
