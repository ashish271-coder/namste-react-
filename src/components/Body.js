import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import reslist from "../utils/mockData";

const Body = () => {

     useEffect(() => {
      fetchData();
   }, []);

   const [listOfResturent, setListOfResturent] = useState(reslist);

   const fetchData = async () => {
      const data = await fetch(
         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6638856&lng=77.1558861&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();

      console.log(json);
   //  setListOfResturent(json.data.cards);
   };


 
         


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