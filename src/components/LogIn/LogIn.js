

import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./LogIn.css" ;


const LogIn = () => {
    
   const{ signInUsingGoogle} = useAuth();
    return (
      <div className="d-flex justify-content-center align-items-center ">
          <div className = "login-form mt-5 px-3 py-3 rounded " >
          <h2>LOG IN</h2>
            <form >
              <input className = "px-5 my-1" type="email" name="" id="" />
              <br />
              <input className = "px-5 my-1" type="password" name="" id="" /> 
              <br />
            <input className=" px-5 my-1 primery-btn rounded " type="submit" value="Submit" />
            </form>
          <p>New to <strong>Mukta Dental Care ? </strong><Link to ='/register'> <br /> Create Account </Link></p>
          <div className="">----------------Or----------------</div>
          <button
            className="primery-btn rounded text-center px-4 py-2"
           onClick = {signInUsingGoogle}
           >Google Sign In</button>
          </div>
        </div>
    );
};

export default LogIn;