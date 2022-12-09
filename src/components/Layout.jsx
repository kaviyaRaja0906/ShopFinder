import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Addshop from "./Pages/Addshop";
import Viewshop from "./Pages/Viewshop";

function Layout(props){
    return(
        <div>
            <div style={{display: "flex"}}>
                <Sidebar history={props.history}/>
                <div style={{maxWidth: '800px'}}>
                    <Navbar />
                    <Addshop />
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Layout;