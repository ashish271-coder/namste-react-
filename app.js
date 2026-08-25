import React from "react";
import ReactDOM from "react-dom/client";

//React element
const heading = (<h1 className="head">Namaste React by jsx by ash
   </h1>);
//React functional component
const HeadingComponent =() => {
    return <h1 className="head">namste React functional component </h1>
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);