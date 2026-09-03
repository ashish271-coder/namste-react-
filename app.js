import React from "react";
import ReactDOM from "react-dom/client";


//React element
const Header = () => {
   return (
      <div className="header">
         <div className="logo">
          <img
  src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"  alt="Logo"
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
const RestaurantCard = () => {
   return(
      <div className="restaurant-card">
         <h3>chotiwala</h3>
      </div>
   )
}
const Body =() => {
   return (
      <div className="body">
         <div className="search"> search</div>
         <div className="restaurant-container"></div>
         <RestaurantCard />
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