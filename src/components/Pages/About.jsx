import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Addshop from "./Addshop";
import Contact from "./Contact";
import Viewshop from "./Viewshop";
import abtImg from "../../assets/about.jpg";

function About(props){
    return(
        <div>
            <div style={{display: "flex"}}>
                <Sidebar history={props.history}/>
                <div style={{maxWidth: '800px'}}>
                    <div className="About">
                      <h2>About Us</h2>
                       <img className="abt-img" src={abtImg}></img>
                      <p className="abt-p">
                      Welcome to Shop Finder!
                      We aim to offer our customers a variety of the latest search shop finder. We’ve come a long way, so we know exactly which direction to take when supplying you with high quality yet budget-friendly products. We offer all of this while providing excellent customer service and friendly support.
                      We always keep an eye on the latest trends in Search App and put our customers’ wishes first. That is why we have satisfied customers all over the world, and are thrilled to be a part of the Shop industry.
                      The interests of our customers are always top priority for us, so we hope you will enjoy our products as much as we enjoy making them available to you.
                      With a motivated team, we strive to be the creative minds that bring a smile to your face. That’s why we’re always looking for innovative new ways to get the best to you.If you’re looking for something new, you’re in the right place. We strive to be industrious and innovative, offering our customers something they want, putting their desires at the top of our priority list.
                      Our customers are our top priority and through our products we work hard towards building long-lasting and meaningful relations with them.If you’re looking for something new, you’re in the right place. We strive to be industrious and innovative, offering our customers something they want, putting their desires at the top of our priority list.
                      </p>
                    </div>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default About;