import React from "react";
import ReactDOM from "react-dom/client";

//React element
const Title =() =>( <h1 className="head">Namaste React by jsx by ash
   </h1> )
   const num = 1000;
//React functional component
const HeadingComponent =() => (
     <div id="container"> 
     <h2>{num}</h2>
     <h1 className="head">namste React functional component </h1> </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);