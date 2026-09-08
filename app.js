import React from "react";
import ReactDOM from "react-dom/client";


//React element
const Header = () => {
   return (
      <div className="header">
         <div className="logo">
            <img
               src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" alt="Logo"
            />
         </div>
         <div className="nav-items">
            <ul>
               <li>Home</li>
               <li>About</li>
               <li>Contact</li>
               <li>Cart</li>
            </ul>
         </div>
      </div>
   )
}
const RestaurantCard = (props) => {
   return (
      <div className="restaurant-card" style={{ backgroundColor: "#f0f0f0" }}>
         <img className="res-logo"
            alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/a2js6idtqyopap5c1kbz"></img>
         <h3>{props.resname}</h3>
         <h4>{props.cousine}</h4>
         <h4>5.5star</h4>
         <h4>38 minuits</h4>
      </div>
   )
}
const Body = () => {
   return (
      <div className="body">
         <div className="search"> search</div>
         <div className="restaurant-container">
            <RestaurantCard resname="chotiwala"
            cousine="brackfast lunch dinner"/>
         <RestaurantCard 
         resname="kfc"
         cousine="burger pizza drinks" />
      
         </div>
         
      </div>
   )
}
const Applayout = () => {
   return (
      <div className="app">
         <Header />
         <Body />
      </div>
   )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);