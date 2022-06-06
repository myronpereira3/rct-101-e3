import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {

  const { login } = useContext(AuthContext);

  return (
    <div>
      Login
      <form action="" style={{display:"flex",flexDirection:"column",maxWidth:"210px",margin:"auto",gap:"10px"}}>
      <input data-cy="login-email" />
      <input data-cy="login-password" />
      <button data-cy="login-submit" onClick={login}>Login</button>
      </form>
    </div>
  );
};

export default Login;