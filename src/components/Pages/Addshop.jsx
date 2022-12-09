import React ,{useState,useEffect,useContext} from "react";
import { Router,Route,Routes,useNavigate, Link } from 'react-router-dom';
import Select from 'react-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./pages.css";
import Areas from "../../Areas";
import Add from "../../assets/Shop.png"
import Categories from "../../Categories";
import validate from "../Validations";
import { MyContext } from "../MyContext";
import jsonData from "../data.json";
import { useForm } from "react-hook-form";
import moment from "moment/moment";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";


function Addshop(props){

    const [shopList, setShopList] = useState(jsonData);
    const [selectedArea, setSelectedArea] = useState();
    const [selectedCategory, setSelectedCategory] = useState();
    const [startDate, setStartDate] = useState(new Date());
    const [format, setFormat] = useState();
    const [shopListIndex , setShopListIndex] = useState();
    const [endDate, setEndDate] = useState(new Date());
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [name, setName] = useState();
    const [id, setId] = useState();
    const [areaError, setAreaError] = useState();
    const [categoryError, setCategoryError] = useState(); 
    const [isDisabled, setIsDisabled] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [shops, setShops] = useState();
    var Total = shopList.length;
    var i = Total-1;
  
    let navigate = useNavigate();
    
   function handleChange(event){
    event.preventDefault(); 
    setId(Total + 1);
    setValues(values => ({
      ...values,
      id: id
    }));
    setValues(values => ({
            ...values,
            name: event.target.value
          }));
          console.log(values);
    };

   function handleSelectArea(event){
    setSelectedArea(event.value);
    setValues(values => ({
        ...values,
        area: event.value
      }));
   }
   function handleSelectCategory(event){
    setSelectedCategory(event.value);
    setValues(values => ({
      ...values,
      category: event.value
    }));
   }

  function handleStartDate(date){
    setStartDate(date);
    setValues(values => ({
      ...values,
      startDate: date.toLocaleDateString()
    }));  
    setIsDisabled(false);
  }
  function handleEndDate(date){
    setEndDate(date);
    setValues(values => ({
      ...values,
      endDate: date.toLocaleDateString()
    })); 
    console.log(values); 

  }
    function handleSubmit(event){
        setErrors(validate(values));
        setIsSubmitting(true);
        event.preventDefault();

      };
      useEffect(() => {  
        if (Object.keys(errors).length === 0 && isSubmitting) {
          shopList.push(values);
          console.log(shopList);
            localStorage.setItem("shopList",JSON.stringify(shopList));  
          setTimeout(() => {
            navigate("/view");
          }, 2000); 
          console.log("no errors");
        }
      }, [errors]);
    
    
    return(
        <div className="shop-form">
        <div>
        <img src={Add} className="shop-img"></img>
        </div>
        <div className="Add-shop">
          <h2>Add a Shop</h2>
          <form onSubmit={handleSubmit} noValidate>
            <label htmlFor="name">Name of the Shop</label><br></br>
            <input 
            type="text" 
            name="name" 
            className="input"
            onChange={handleChange}
            value={values.name || ""}
            required>
            </input><br></br>
            {errors.name && (<p className="help is-danger">{errors.name}</p>)}
            <label htmlFor="area">Area of the Shop</label><br></br>
            <Select
              name="area"
              className="select-date"
              value={Areas.filter(obj => obj.value === selectedArea)} 
              selected = {selectedArea}
              onChange={handleSelectArea}
              options={Areas}
              required
            />
            {errors.area && (<p className="help is-danger">{errors.area}</p>)}
            <label htmlFor="category">Category</label><br></br>
            <Select
              name="category"
              className="select-date"
              value={Categories.filter(obj => obj.value === selectedCategory)} 
              onChange={handleSelectCategory}
              selected={selectedCategory}
              options={Categories}
              required
            />
            {errors.category && (<p className="help is-danger">{errors.category}</p>)}            
            <div>
            <div className="oDate">
            <label htmlFor="opening-date">Opening Date</label>
            <DatePicker 
            name="startDate" 
            className="date-picker"
            value={startDate}
            selected={startDate}
            onChange={handleStartDate}
            required
            />
            {errors.startDate && (<p className="help is-danger">{errors.startDate}</p>)}                        
            </div>
            <div className="cDate">
            <label htmlFor="closing-date">Closing Date</label>
            <DatePicker 
            name="endDate" 
            className="date-picker"
            selected={endDate} 
            onChange={handleEndDate}
            disabled ={isDisabled}
            required
            />
            {errors.endDate && (<p className="help is-danger">{errors.endDate}</p>)}                        
            </div>
            </div><br></br><br></br>
            <button type="submit" id="submit" className="shop-btn">Add Shop</button>
          </form>
        </div>
    </div>
    )
}

export default Addshop;