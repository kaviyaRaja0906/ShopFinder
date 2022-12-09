import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import About from "./About";
import Addshop from "./Addshop";
import Viewshop from "./Viewshop";
import conImg from "../../assets/contact.png";

function Contact(props){
    return(
        <div className="contact-page">
            <div style={{display: "flex"}}>
                <Sidebar history={props.history}/>
                <div style={{maxWidth: '800px'}}>
                    <div>
                    <div className="container contact">
                      <div className="justify-content-center">
                         <h2>Get In Touch</h2>
                         <div className="Address">
                           <div className="line-1">
                            <h4>Address</h4>
                            <p>
                            669 Riverwood Drive<br></br>
                            Sacramento,CA  
                            </p>
                           </div>
                           <div className="line-2">
                            <h4>Contact</h4>
                            <p>
                             530-388-1785<br></br>
                             hello@contact.design
                            </p>
                           </div>
                         </div>
                         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31290.58548557931!2d77.85610547431641!3d11.384056500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9619781465989%3A0xabee840d9483f6aa!2sPranav%20Plaza!5e0!3m2!1sen!2sin!4v1670579049966!5m2!1sen!2sin" 
                         width="600" 
                         height="320" 
                         style={{border:0}} 
                         allowFullScreen="" 
                         loading="lazy" 
                         referrerPolicy="no-referrer-when-downgrade">
                         </iframe>
                      </div>
                    </div>
                    </div>
                    {props.children}
                </div>
                <div>
                    <img className="contact-img" src={conImg}></img>
                </div>
            </div>
        </div>
    )
}

export default Contact;