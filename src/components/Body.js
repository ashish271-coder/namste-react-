import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import reslist from "../utils/mockData";

const Body = () => {
   const [listOfResturent, setListOfResturent] = useState(reslist);
      useEffect(()=>{
       fetchData()
      }, []);
      const fetchData =()=>{
         const data = fetch();
      }
      
         


   return (
      <div className="body">
         <div className="filter">
            <button className="filter-btn"
             onClick={() => {
               const filteredList = listOfResturent.filter(res => res.info.avgRating > 4);     //filter logic ...      
               setListOfResturent(filteredList);
            }

            }
            >Top Rated Restaurant</button>
         </div>
         <div className="restaurant-container">
            {
               listOfResturent.map((resturnt) => (<RestaurantCard key={resturnt.info.id} resData={resturnt} />))
            }

         </div>

      </div>
   )
};
export default Body;