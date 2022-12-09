import React from "react";
import {BrowserRouter as Router,Routes, Route, Switch} from "react-router-dom";
import Welcome from "./Welcome.jsx";
import Layout from "./Layout.jsx";
import Viewshop from "./Pages/Viewshop.jsx";
import Addshop from "./Pages/Addshop.jsx";
import Contact from "./Pages/Contact.jsx";
import About from "./Pages/About.jsx";

function App(){
  
    return(
        <div>
        <Router>
        <div>
        <Routes>
        <Route exact path='/' element={<Welcome />}  />
        <Route exact path='/Layout' element={<Layout />}  />
        <Route exact path='/add' element={<Addshop />}  />
        <Route exact path='/view' element={<Viewshop />}  />
        <Route exact path='/contact' element={<Contact />}  />
        <Route exact path='/about' element={<About />}  />
        </Routes>
        </div>
        </Router>
        </div>
);
}

export default App;