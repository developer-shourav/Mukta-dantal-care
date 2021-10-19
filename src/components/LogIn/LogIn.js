

import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const LogIn = () => {
    
   const{ signInUsingGoogle} = useAuth();
    return (
      <div className="d-flex justify-content-center align-items-center ">
          <div >
          <h2>Login </h2>
            <form onSubmit="">
              <input type="email" name="" id="" />
              <br />
              <input type="password" name="" id="" /> 
              <br />
              <input type="submit" value="Submit" />
            </form>
          <p>New to <strong>Mukta Dental Care </strong><Link to ='/register'>  Create Account </Link></p>
          <div className="">----------------Or----------------</div>
          <button
           className="google-signin-btn"
           onClick = {signInUsingGoogle}
           >Google Sign In</button>
          </div>
        </div>
    );
};

export default LogIn;