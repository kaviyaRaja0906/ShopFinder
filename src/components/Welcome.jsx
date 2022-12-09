import React from "react";
import { Router,Route,Routes,useNavigate, Link , Outlet} from 'react-router-dom';
import Image from "../assets/Welcome.png"
import Layout from "./Layout";

function Welcome(){

    let navigate = useNavigate();
    return(
        <div className="home">
           <div className="container">
            <div className="justify-content-center">
            <img className="welcome-img" src={Image}></img>
             <div className="wel-text">
                <h2>Welcome to ShopFinder</h2>
                <button className="Go-btn" onClick={() => navigate("/Layout")}>Explore</button>
             </div>
            </div>
           </div>
        </div>
    )
}

export default Welcome;