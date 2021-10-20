import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation()
    const history = useHistory();
    const redirect_uri = location.state?.from || "/home";

    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {

                history.push(redirect_uri);
            })
    }



    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="login-form card-style mt-5 px-3 py-3 rounded ">
               <h2>Create An Account </h2>
                <form >
                    <input className="ps-2 w-100 my-1" type="email" name="" id="" placeholder = "Your Email" required />
                    <br />

                    <input className=" ps-2 w-100 my-1" type="password" name="" id="" placeholder = "Password" />
                    <br />

                    <input className=" ps-2 w-100 my-1" type="password" name="" id="" placeholder = "Re-Enter password" />
                    <br />
                    <br />
                    <input className=" w-100 py-2 my-1 primery-btn rounded " type="submit" value="SUBMIT" />
                </form>
                <p>Already have an Account ? <Link to = "/login"> Login</Link></p>
                <div className="">---------------------Or-------------------</div>
                <button onClick={handleGoogleLogIn} className="primery-btn w-100 rounded text-center px-4 py-2">Signin with Google </button>
           </div>
        </div>
    );
};

export default Register;