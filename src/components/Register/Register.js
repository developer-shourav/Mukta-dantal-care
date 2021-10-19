import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="d-flex justify-content-center align-items-center">
           <div>
               <h2>Create An Account </h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder = "Your Email" required />
                    <br />

                    <input type="password" name="" id="" placeholder = "Password" />
                    <br />

                    <input type="password" name="" id="" placeholder = "Re-Enter password" />
                    <br />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an Account ? <Link to = "/login"> Login</Link></p>
                <div className="">---------Or---------</div>
                <button className="google-signin-btn">Google Sign In</button>
           </div>
        </div>
    );
};

export default Register;