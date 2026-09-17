import RestaurantCard from "./RestaurantCard";
import reslist from "../utils/mockdata";
const Body = () => {
      return (
         <div className="body">
            <div className="filter">
               <button className="filter-btn" onClick={
                  () =>{console.log("top resto is ")}}
                  >Top Rated Restaurant</button>
            </div>
            <div className="restaurant-container">
            {
               reslist.map((resturnt) =>(<RestaurantCard key ={resturnt.info.id} resData ={resturnt}/>))
            }
          
            </div>
            
         </div>
      )
   };
   export default Body;