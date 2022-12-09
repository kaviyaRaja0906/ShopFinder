import React ,{useState,useEffect} from "react";
import { Router,Route,Routes,useNavigate, Link} from 'react-router-dom';
import styled from "styled-components";
import SidebarItems from "./SidebarItems";
import "./Sidebar.css";
import logo from "../assets/logo.png";

function Sidebar(props,{defaultActive},){

    const lastActiveIndexString = localStorage.getItem("lastActiveIndex");
    const lastActiveIndex = Number(lastActiveIndexString);
    const [activeIndex, setActiveIndex] = useState(lastActiveIndex || defaultActive);

    function changeActiveIndex(newIndex) {
        localStorage.setItem("lastActiveIndex", newIndex)
        setActiveIndex(newIndex)
    }

    function getPath(path) {
        if (path.charAt(0) !== "/") {
            return  "/" + path;
        }
        return path;
    }

    useEffect(()=> {
        const activeItem = SidebarItems.findIndex(item=> getPath(item.route) === getPath(location.pathname))
        changeActiveIndex(activeItem);
    }, [location])

    return(
      <div>
        <SidebarParent>
         <div style={{position: 'fixed'}}>
            <img className="logo" src={logo}></img>
            {SidebarItems.map((item, index)=> {
                return (
                    <Link to={item.route}>
                    <SidebarItem key={item} active={index === activeIndex} className={item.cName}>
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                    </SidebarItem>
                    </Link>
                 );
                })}
                </div>
                <div className="behind-the-scenes"/>
            </SidebarParent>
      </div>
    )
}

export default Sidebar;

const SidebarParent = styled.div`
  background: #540375;
  
  a {
    text-decoration: none;
  }
  
  & > div {
    width: 250px;
    height: 100vh;
  }
  
  .behind-the-scenes {
    width: 250px;
    
  }
`;

const SidebarItem = styled.div`
  padding: 16px 24px;
  transition: all 0.25s ease-in-out;
  background: ${props => props.active ? "#b15b00" : ""};
  margin: 4px 12px;
  border-radius: 4px;

  span {
    color: white;
    font-weight: bold;
    text-decoration: none;
    margin-left: 30px;
  }
  
  &:hover {
    cursor:pointer;
  }
  
  &:hover:not(:first-child) {
    background: #c34a36;
  }
`;
