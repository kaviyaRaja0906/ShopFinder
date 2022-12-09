import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";


const SidebarItems =[
    {
        key:1,
        name: "Home",
        route:"/",
        icon: <AiIcons.AiFillHome />,
        cName: "nav-text"

    },
    {
        key:2,
        name: "Add shop",
        route:"/Layout",
        icon: <IoIcons.IoIosPaper />,
        cName: "nav-text"

    },
    {
        key:3,
        name: "View shop",
        route:"/view",
        icon: <FaIcons.FaCartPlus />,
        cName: "nav-text"

    },
    {
        key:4,
        name: "Contact",
        route:"/contact",
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: "nav-text"

    },
    {
        key:5,
        name: "About",
        route:"/about",
        icon: <IoIcons.IoMdPeople />,
        cName: "nav-text"

    },

];

export default SidebarItems;