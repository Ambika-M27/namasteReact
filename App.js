
import React from "react";
import ReactDOM from 'react-dom/client';
import "./Components/amb.css";
import "./Components/body.js";
import "./Components/RestaurantCard.js";
import Body from "./Components/body"
import RestaurantCard from "./Components/RestaurantCard"
 import {resList} from "./Components/resobj" 



const App = () => {

 

  return (
<>
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Editable-Photoshop-Food-Logo-Design-PNG-Transparent.png" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
      <Body/>
      {
        resList.map((RestaurantCard)=>
        <RestaurantCard resData={RestaurantCard} key={RestaurantCard.data.id}/>
        ) 
     
      };
     
     </>  



);
};



export default App;

