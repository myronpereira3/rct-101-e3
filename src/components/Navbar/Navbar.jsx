import React, { useContext } from "react";
import { Link, useNavigate  } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  const navigation = useNavigate();
  const { isAuthorize, login, logOut } = useContext(AuthContext);

 
  return (
    <div data-cy="navbar">Navbar
      <Link data-cy="navbar-home-link" to='/' >Home</Link>
      <span data-cy="navbar-cart-items-count"></span>
      <button data-cy="navbar-login-logout-button" onClick={
        () => {
          if(isAuthorize){
            logOut();
          }else{
            login();
          }
        }

      }>
         {isAuthorize ? "Logout" : "Login"}
     </button>

    </div>
  );
};

export default Navbar;
