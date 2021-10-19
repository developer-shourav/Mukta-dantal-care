import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./Header.css" ;

const Header = () => {
   const activeStyle ={
        color:"white",
        padding: '18px 10px ',  
        backgroundColor:"#4995ff"
    };

    const {user, logOut} = useAuth()


    return (
        <div >
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                    <div className="container-fluid">
                        <h3 className = 'site-logo'>Muckta Dental Care</h3>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarScroll">
                            <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll" >


                                <li className="nav-item ">
                                    <NavLink activeStyle={activeStyle} className=" nav-items-style nav-items-style " to = "/home"> Home</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink activeStyle={activeStyle} className=" nav-items-style" to="/services"> Services</NavLink>
                                </li>


                                <li className="nav-item">
                                    <NavLink activeStyle={activeStyle} className=" nav-items-style" to="/about"> About</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink activeStyle={activeStyle} className=" nav-items-style" to="/contact"> Contact</NavLink>
                                </li>

                                {user.email && <li className="">
                                    <span className="fs-6 fw-bold" style={{ color:"#4955ff"}}> Hello {user.displayName}</span>
                                </li>}

                                <li className="nav-item">
                                    {
                                        user.email ?
                                        <button onClick = {logOut}>Log out</button> : <NavLink activeStyle={activeStyle} className=" nav-items-style" to="/login">LogIn </NavLink>
                                    }
                                </li>

                                
                            </ul>
                           
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;