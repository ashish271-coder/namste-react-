import RestaurantCard from "./RestaurantCard";
import reslist from "../utils/mockdata";
const Body = () => {
   let listOfResturent = [ 
      {"info": {
"id": "517530",
"name": "Everbake",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/8/9/7762dfd6-0ad8-4fd2-ad8b-f34fab29f279_51753.jpg",
"locality": "Vashisht Kumar Gulla Marg",
"areaName": "Punjabi Bagh",
"costForTwo": "₹500 for two",
"cuisines": [
"North Indian",
"Snacks",
"Desserts",
"Chinese"
],
"avgRating":3.5,
"veg": true,
"parentId": "4772",
"avgRatingString": "4.4",
"totalRatingsString": "48K+",
"sla": {
"deliveryTime": 26,
}
}
},
{"info": {
"id": "51753",
"name": "chotiwala",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/8/9/7762dfd6-0ad8-4fd2-ad8b-f34fab29f279_51753.jpg",
"locality": "Vashisht Kumar Gulla Marg",
"areaName": "Punjabi Bagh",
"costForTwo": "₹500 for two",
"cuisines": [
"North Indian",
"Snacks",
"Desserts",
"Chinese"
],
"avgRating": 4.4,
"veg": true,
"parentId": "4772",
"avgRatingString": "4.4",
"totalRatingsString": "48K+",
"sla": {
"deliveryTime": 26,
}
}
},
{"info": {
"id": "5175",
"name": "MCD",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/8/9/7762dfd6-0ad8-4fd2-ad8b-f34fab29f279_51753.jpg",
"locality": "Vashisht Kumar Gulla Marg",
"areaName": "Punjabi Bagh",
"costForTwo": "₹500 for two",
"cuisines": [
"North Indian",
"Snacks",
"Desserts",
"Chinese"
],
"avgRating": 4.1,
"veg": true,
"parentId": "4772",
"avgRatingString": "4.4",
"totalRatingsString": "48K+",
"sla": {
"deliveryTime": 26,
}
}
}
];

      return (
         <div className="body">
            <div className="filter">
               <button className="filter-btn" onClick={() =>{
                  listOfResturent = listOfResturent.filter(res =>res.info.avgRating > 4);     //filter logic ...      
                  console .log(listOfResturent);
               }
               
                }
                  >Top Rated Restaurant</button>
            </div>
            <div className="restaurant-container">
            {
               listOfResturent.map((resturnt) =>(<RestaurantCard key ={resturnt.info.id} resData ={resturnt}/>))
            }
          
            </div>
            
         </div>
      )
   };
   export default Body;