import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="login-form mt-5 px-3 py-3 rounded ">
               <h2>Create An Account </h2>
                <form >
                    <input className="px-5 my-1" type="email" name="" id="" placeholder = "Your Email" required />
                    <br />

                    <input className="px-5 my-1" type="password" name="" id="" placeholder = "Password" />
                    <br />

                    <input className="px-5 my-1" type="password" name="" id="" placeholder = "Re-Enter password" />
                    <br />
                    <br />
                    <input className=" px-5 my-1 primery-btn rounded " type="submit" value="Submit" />
                </form>
                <p>Already have an Account ? <Link to = "/login"> Login</Link></p>
                <div className="">---------Or---------</div>
                <button className="primery-btn rounded text-center px-4 py-2">Google Sign In</button>
           </div>
        </div>
    );
};

export default Register;