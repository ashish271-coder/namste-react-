import RestaurantCard from "./RestaurantCard";
import reslist from "../utils/mockdata";
const Body = () => {
      return (
         <div className="body">
            <div className="search"> search</div>
            <div className="restaurant-container">
            {
               reslist.map((resturnt) =>(<RestaurantCard key ={resturnt.info.id} resData ={resturnt}/>))
            }
          
            </div>
            
         </div>
      )
   };
   export default Body;