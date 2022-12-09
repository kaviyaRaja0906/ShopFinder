import React,{useState,useEffect}from "react";
import { Router,Route,Routes,useNavigate, Link } from 'react-router-dom';
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import Addshop from "./Addshop";
import shops from "../data.json";
import "./pages.css";


function Viewshop(props){

    const [retrieved,setRetrieved] = useState();
    const [input,setInput] = useState();
    const [filter,setFilter] = useState();
    useEffect(() => {
        setRetrieved(JSON.parse(localStorage.getItem("shopList"||"[]")));
        console.log(retrieved);
      }, []);
    function deleteItem(id){
      let index = retrieved.findIndex(x => x.id == id);
      retrieved.splice(index,1);
     localStorage.setItem("shopList",JSON.stringify(retrieved));
     setTimeout(() => {
      window.location.reload();
     }, 1000);
    }
    function handleInput(e){
      setInput(e.target.value);
    }
    function handleSearch(event){
      event.preventDefault();
      setFilter(retrieved.filter((item) => {
        return item.name.toLowerCase().indexOf(input.toLowerCase()) !== -1;
      }));
       
       console.log(input,filter);
    }
    function Cancel(){
      window.location.reload();
    }
    return(
        <div>
        <div style={{display: "flex"}}>
            <Sidebar history={props.history}/>
            <div style={{maxWidth: '800px'}}>
                <Navbar />
        <div className="search-div">
        <h4 className="head">List of Shops Data</h4>
        <form className="Search" onSubmit={handleSearch} noValidate>
          <input placeholder="search" name="search" onChange={handleInput} type="text" className="search-input"></input>
          <button type="submit" className="search-btn"><i class="fa fa-search"></i></button>
        </form>
        </div><br></br> 
        {filter && filter.map((item,index) =>(
          <div>
          <table className="filter">
            <tbody>
            <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.area}</td>
                    <td>{item.category}</td>
                    <td>{item.startDate}</td>
                    <td>{item.endDate}</td>
                    <td><button className="delete-btn" onClick={() => deleteItem(item.id)}>Delete</button></td>
                    <td><button className="cancel-btn" onClick={Cancel}><i class="fa-solid fa-ban"></i></button></td>
                </tr>
            </tbody>
          </table>
          <br></br>
          </div>
        ))}  
        <div className="view-shop">
          <table>
            <thead>
            <tr>
              <th>Shop Name</th>
              <th>Area of the Shop</th>
              <th>Category</th>
              <th>Opening Date</th>
              <th>Closing Date</th>
              <th>delete</th>
            </tr>
            </thead>
            <tbody>
            {retrieved && retrieved.map((item,index) => (
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.area}</td>
                    <td>{item.category}</td>
                    <td>{item.startDate}</td>
                    <td>{item.endDate}</td>
                    <td><button className="delete-btn" onClick={() => deleteItem(item.id)}>Delete</button></td>
                </tr>
            ))}
            </tbody>

          </table>
        </div>
        </div>
      </div>
    </div>           

    )
}

export default Viewshop;