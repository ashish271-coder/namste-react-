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
      const{resData} = props;
      return (
         <div className="restaurant-card" style = {{ backgroundColor: "#f0f0f0" }}>
            <img className="res-logo"
               alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
         +resData.info.cloudinaryImageId}></img>
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(",")}</h4>
            <h4>{resData.info.avgRating}star</h4>
             <h4>{resData.info.costForTwo}</h4>
              <h4>{resData.info.sla.slaString}</h4>
         </div>
      );
   };
   const resObj ={"info": {
                        "id": "671928",
                        "name": "KFC",
                        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/7/1/2b11b4e1-72fd-4f29-a32a-68a9151e85fa_671928.JPG",
                        "locality": "7th Block",
                        "areaName": "Koramangla",
                        "costForTwo": "₹400 for two",
                        "cuisines": [
                           "Burgers",
                           "Fast Food",
                           "Rolls & Wraps"
                        ],
                        "avgRating": 4.1,
                        "parentId": "547",
                        "avgRatingString": "4.1",
                        "totalRatingsString": "7.7K+",
                        "sla": {
                           "deliveryTime": 18,
                           "lastMileTravel": 1.2,
                           "serviceability": "SERVICEABLE",
                           "slaString": "15-20 mins",
                           "lastMileTravelString": "1.2 km",
                           "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                           "nextCloseTime": "2026-09-11 03:00:00",
                           "opened": true
                        },
                        "badges": {
                           "imageBadges": [
                           {
                              "imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                              "description": "Top-rated for Bolt, based on user votes."
                           }
                           ]
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                           "entityBadges": {
                           "imageBased": {
                              "badgeObject": [
                                 {
                                 "attributes": {
                                    "description": "Top-rated for Bolt, based on user votes.",
                                    "imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                                    "theme": ""
                                 }
                                 }
                              ]
                           },
                           "textBased": {

                           },
                           "textExtendedBadges": {

                           }
                           }
                        },
                        "aggregatedDiscountInfoV3": {
                           "header": "50% OFF",
                           "discountTag": "FLAT DEAL",
                           "discountCalloutInfo": {
                           "message": "Free Delivery",
                           "logoCtx": {
                              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                           }
                           },
                           "logoCtx": {
                           "text": "BENEFITS"
                           }
                        },
                        "differentiatedUi": {
                           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                           "differentiatedUiMediaDetails": {
                           "lottie": {

                           },
                           "video": {

                           }
                           }
                        },
                        "reviewsSummary": {

                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {

                        },
                        "externalRatings": {
                           "aggregatedRating": {
                           "rating": "--"
                           }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                        "priceComparisonComms": {

                        }
                     },
                     "analytics": {
                        "context": "seo-data-fa234042-2768-4b34-9af4-aeb211bf63d9"
                     },
                     "cta": {
                        "link": "https://www.swiggy.com/city/bangalore/kfc-7th-block-koramangla-rest671928",
                        "type": "WEBLINK"
                     }
                     };
   const Body = () => {
      return (
         <div className="body">
            <div className="search"> search</div>
            <div className="restaurant-container">
             <RestaurantCard resData = {resObj}/>
         
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