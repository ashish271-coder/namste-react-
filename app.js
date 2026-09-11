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
   const reslist = [ 
{
         "info": {
"id": "51753",
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
"avgRating": 4.4,
"veg": true,
"parentId": "4772",
"avgRatingString": "4.4",
"totalRatingsString": "48K+",
"sla": {
"deliveryTime": 26,
"lastMileTravel": 2.8,
"serviceability": "SERVICEABLE",
"slaString": "20-25 mins",
"lastMileTravelString": "2.8 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-09-11 23:30:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "android/static-assets/icons/big_rx.png",
"description": "bolt!"
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
"description": "bolt!",
"imageId": "android/static-assets/icons/big_rx.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "50% OFF",
"subHeader": "UPTO ₹100",
"logoCtx": {
"text": "BENEFITS"
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"priceComparisonComms": {}
},
"analytics": {
"context": "seo-data-dc4b4943-d948-414f-a6ca-4fd96e4e8c6f"
},
"cta": {
"link": "https://www.swiggy.com/city/delhi/everbake-vashisht-kumar-gulla-marg-punjabi-bagh-rest51753",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "132206",
"name": "Biryani By Kilo",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/9/1/0e2fc8f0-e76f-4425-9dc2-22a06b592081_132206.JPG",
"locality": "A Block ",
"areaName": "Rajouri Garden",
"costForTwo": "₹700 for two",
"cuisines": [
"Biryani",
"Hyderabadi",
"North Indian",
"Kebabs",
"Mughlai",
"Desserts"
],
"avgRating": 4.3,
"parentId": "130",
"avgRatingString": "4.3",
"totalRatingsString": "12K+",
"sla": {
"deliveryTime": 29,
"lastMileTravel": 3.7,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "3.7 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-09-12 01:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "brand_cards/Badges%202026/39_Best%20in%20Biryani2026.png",
"description": "Top-rated for Biryani, based on user votes."
},
{
"imageId": "newg.png",
"description": "Premium gourmet restaurant offering an elevated, high-quality food experience."
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
"description": "Top-rated for Biryani, based on user votes.",
"imageId": "brand_cards/Badges%202026/39_Best%20in%20Biryani2026.png",
"theme": ""
}
},
{
"attributes": {
"description": "Premium gourmet restaurant offering an elevated, high-quality food experience.",
"imageId": "newg.png",
"theme": ""
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "70% OFF",
"subHeader": "UPTO ₹140",
"logoCtx": {
"text": "BENEFITS"
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "3.7",
"ratingCount": "309"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"priceComparisonComms": {}
},
"analytics": {
"context": "seo-data-dc4b4943-d948-414f-a6ca-4fd96e4e8c6f"
},
"cta": {
"link": "https://www.swiggy.com/city/delhi/biryani-by-kilo-a-block-rajouri-garden-rest132206",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "1386799",
"name": "Theobroma",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/9/11/ae136c75-3b6b-4871-8456-c356382a008f_1386799.jpg",
"locality": "Kirti Nagar Metro Station Road",
"areaName": "Kirti Nagar",
"costForTwo": "₹300 for two",
"cuisines": [
"Bakery",
"Desserts",
"Beverages"
],
"avgRating": 3.9,
"parentId": "1040",
"avgRatingString": "3.9",
"totalRatingsString": "70",
"sla": {
"deliveryTime": 15,
"lastMileTravel": 1.8,
"serviceability": "SERVICEABLE",
"slaString": "10-15 mins",
"lastMileTravelString": "1.8 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-09-12 02:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "android/static-assets/icons/big_rx.png",
"description": "bolt!"
},
{
"imageId": "newg.png",
"description": "Premium gourmet restaurant offering an elevated, high-quality food experience."
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
"description": "bolt!",
"imageId": "android/static-assets/icons/big_rx.png"
}
},
{
"attributes": {
"description": "Premium gourmet restaurant offering an elevated, high-quality food experience.",
"imageId": "newg.png",
"theme": ""
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "50% OFF",
"discountTag": "FLAT DEAL",
"logoCtx": {
"text": "BENEFITS"
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"isNewlyOnboarded": true,
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"priceComparisonComms": {}
},
"analytics": {
"context": "seo-data-dc4b4943-d948-414f-a6ca-4fd96e4e8c6f"
},
"cta": {
"link": "https://www.swiggy.com/city/delhi/theobroma-metro-station-road-kirti-nagar-rest1386799",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "1334079",
"name": "KFC",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/7/1/d7a72e1e-de5d-4daf-90bc-240270b04a4b_1334079.JPG",
"locality": "Epicah Mall",
"areaName": "Moti Nagar",
"costForTwo": "₹400 for two",
"cuisines": [
"Burgers",
"Fast Food",
"Rolls & Wraps"
],
"avgRating": 4.3,
"parentId": "547",
"avgRatingString": "4.3",
"totalRatingsString": "239",
"sla": {
"deliveryTime": 21,
"lastMileTravel": 1.5,
"serviceability": "SERVICEABLE",
"slaString": "15-20 mins",
"lastMileTravelString": "1.5 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-09-11 23:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "android/static-assets/icons/big_rx.png",
"description": "bolt!"
},
{
"imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
"description": "Top-rated for Bolt, based on user votes."
},
{
"imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
"description": "Top-rated for Burger, based on user votes."
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
"description": "bolt!",
"imageId": "android/static-assets/icons/big_rx.png"
}
},
{
"attributes": {
"description": "Top-rated for Bolt, based on user votes.",
"imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
"theme": ""
}
},
{
"attributes": {
"description": "Top-rated for Burger, based on user votes.",
"imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
"theme": ""
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "50% OFF",
"discountTag": "FLAT DEAL",
"logoCtx": {
"text": "BENEFITS"
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"priceComparisonComms": {}
},
"analytics": {
"context": "seo-data-dc4b4943-d948-414f-a6ca-4fd96e4e8c6f"
},
"cta": {
"link": "https://www.swiggy.com/city/delhi/kfc-epicah-mall-moti-nagar-rest1334079",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "1002383",
"name": "McDonald's",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/5f636a4b-bee7-4811-b5db-ae71d42c7a56_1002383.JPG",
"locality": "Najafgarh Road",
"areaName": "Moti Nagar",
"costForTwo": "₹400 for two",
"cuisines": [
"American",
"Fast Food",
"Beverages"
],
"avgRating": 4.5,
"parentId": "630",
"avgRatingString": "4.5",
"totalRatingsString": "2.6K+",
"sla": {
"deliveryTime": 19,
"lastMileTravel": 1.5,
"serviceability": "SERVICEABLE",
"slaString": "15-20 mins",
"lastMileTravelString": "1.5 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-09-11 22:45:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "android/static-assets/icons/big_rx.png",
"description": "bolt!"
},
{
"imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
"description": "Top-rated for Bolt, based on user votes."
},
{
"imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
"description": "Top-rated for Burger, based on user votes."
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
"description": "bolt!",
"imageId": "android/static-assets/icons/big_rx.png"
}
},
{
"attributes": {
"description": "Top-rated for Bolt, based on user votes.",
"imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
"theme": ""
}
},
{
"attributes": {
"description": "Top-rated for Burger, based on user votes.",
"imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
"theme": ""
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹52",
"logoCtx": {
"text": "BENEFITS"
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"priceComparisonComms": {}
},
"analytics": {
"context": "seo-data-dc4b4943-d948-414f-a6ca-4fd96e4e8c6f"
},
"cta": {
"link": "https://www.swiggy.com/city/delhi/mcdonalds-najafgarh-road-moti-nagar-rest1002383",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "559120",
"name": "Subway",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/4a1c040e-4d68-4682-8511-39cb609468c9_559120.jpg",
"locality": "Kirti Nagar",
"areaName": "Rajouri Garden",
"costForTwo": "₹350 for two",
"cuisines": [
"sandwich",
"Salads",
"wrap",
"Healthy Food"
],
"avgRating": 4.2,
"parentId": "2",
"avgRatingString": "4.2",
"totalRatingsString": "4.3K+",
"sla": {
"deliveryTime": 26,
"lastMileTravel": 1.7,
"serviceability": "SERVICEABLE",
"slaString": "20-25 mins",
"lastMileTravelString": "1.7 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-09-12 04:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Health%20Hub/RX%20BADGE/BADGE2.png",
"description": "Meals with high protein, low calorie and no added sugar"
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
"description": "Meals with high protein, low calorie and no added sugar",
"imageId": "Health%20Hub/RX%20BADGE/BADGE2.png",
"theme": ""
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹150 OFF",
"subHeader": "ABOVE ₹299",
"discountTag": "FLAT DEAL",
"logoCtx": {
"text": "BENEFITS"
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"priceComparisonComms": {}
},
"analytics": {
"context": "seo-data-dc4b4943-d948-414f-a6ca-4fd96e4e8c6f"
},
"cta": {
"link": "https://www.swiggy.com/city/delhi/subway-kirti-nagar-rajouri-garden-rest559120",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "66028",
"name": "Burger King",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/bae692fa-e513-4d44-94b7-0a1f3a0e404e_66028.jpg",
"locality": "Kirti Nagar Metro Station",
"areaName": "Kirti Nagar",
"costForTwo": "₹350 for two",
"cuisines": [
"Burgers",
"American"
],
"avgRating": 4.2,
"parentId": "166",
"avgRatingString": "4.2",
"totalRatingsString": "26K+",
"sla": {
"deliveryTime": 19,
"lastMileTravel": 2.1,
"serviceability": "SERVICEABLE",
"slaString": "15-20 mins",
"lastMileTravelString": "2.1 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-09-12 06:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "android/static-assets/icons/big_rx.png",
"description": "bolt!"
},
{
"imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
"description": "Top-rated for Burger, based on user votes."
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
"description": "bolt!",
"imageId": "android/static-assets/icons/big_rx.png"
}
},
{
"attributes": {
"description": "Top-rated for Burger, based on user votes.",
"imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
"theme": ""
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹59",
"logoCtx": {
"text": "BENEFITS"
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.6",
"ratingCount": "4.7K+"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"priceComparisonComms": {}
},
"analytics": {
"context": "seo-data-dc4b4943-d948-414f-a6ca-4fd96e4e8c6f"
},
"cta": {
"link": "https://www.swiggy.com/city/delhi/burger-king-metro-station-kirti-nagar-rest66028",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "683154",
"name": "La Pino'z Pizza",
"cloudinaryImageId": "231e86161a0091cd2137367c39b5943e",
"locality": "Tagore Market",
"areaName": "Kirti Nagar",
"costForTwo": "₹300 for two",
"cuisines": [
"Pizzas",
"Pastas",
"Italian",
"Fast Food"
],
"avgRating": 3.9,
"parentId": "4961",
"avgRatingString": "3.9",
"totalRatingsString": "6.0K+",
"sla": {
"deliveryTime": 23,
"lastMileTravel": 2.2,
"serviceability": "SERVICEABLE",
"slaString": "20-25 mins",
"lastMileTravelString": "2.2 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-09-12 05:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "50% OFF",
"discountTag": "FLAT DEAL",
"logoCtx": {
"text": "BENEFITS"
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.5",
"ratingCount": "360"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"priceComparisonComms": {}
},
"analytics": {
"context": "seo-data-dc4b4943-d948-414f-a6ca-4fd96e4e8c6f"
},
"cta": {
"link": "https://www.swiggy.com/city/delhi/la-pinoz-pizza-tagore-market-kirti-nagar-rest683154",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},{
         "info": {
"id": "51753",
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
"avgRating": 4.4,
"veg": true,
"parentId": "4772",
"avgRatingString": "4.4",
"totalRatingsString": "48K+",
"sla": {
"deliveryTime": 26,
"lastMileTravel": 2.8,
"serviceability": "SERVICEABLE",
"slaString": "20-25 mins",
"lastMileTravelString": "2.8 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-09-11 23:30:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "android/static-assets/icons/big_rx.png",
"description": "bolt!"
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
"description": "bolt!",
"imageId": "android/static-assets/icons/big_rx.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "50% OFF",
"subHeader": "UPTO ₹100",
"logoCtx": {
"text": "BENEFITS"
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"priceComparisonComms": {}
},
"analytics": {
"context": "seo-data-dc4b4943-d948-414f-a6ca-4fd96e4e8c6f"
},
"cta": {
"link": "https://www.swiggy.com/city/delhi/everbake-vashisht-kumar-gulla-marg-punjabi-bagh-rest51753",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "132206",
"name": "Biryani By Kilo",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/9/1/0e2fc8f0-e76f-4425-9dc2-22a06b592081_132206.JPG",
"locality": "A Block ",
"areaName": "Rajouri Garden",
"costForTwo": "₹700 for two",
"cuisines": [
"Biryani",
"Hyderabadi",
"North Indian",
"Kebabs",
"Mughlai",
"Desserts"
],
"avgRating": 4.3,
"parentId": "130",
"avgRatingString": "4.3",
"totalRatingsString": "12K+",
"sla": {
"deliveryTime": 29,
"lastMileTravel": 3.7,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "3.7 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-09-12 01:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "brand_cards/Badges%202026/39_Best%20in%20Biryani2026.png",
"description": "Top-rated for Biryani, based on user votes."
},
{
"imageId": "newg.png",
"description": "Premium gourmet restaurant offering an elevated, high-quality food experience."
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
"description": "Top-rated for Biryani, based on user votes.",
"imageId": "brand_cards/Badges%202026/39_Best%20in%20Biryani2026.png",
"theme": ""
}
},
{
"attributes": {
"description": "Premium gourmet restaurant offering an elevated, high-quality food experience.",
"imageId": "newg.png",
"theme": ""
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "70% OFF",
"subHeader": "UPTO ₹140",
"logoCtx": {
"text": "BENEFITS"
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "3.7",
"ratingCount": "309"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"priceComparisonComms": {}
},
"analytics": {
"context": "seo-data-dc4b4943-d948-414f-a6ca-4fd96e4e8c6f"
},
"cta": {
"link": "https://www.swiggy.com/city/delhi/biryani-by-kilo-a-block-rajouri-garden-rest132206",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "1386799",
"name": "Theobroma",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/9/11/ae136c75-3b6b-4871-8456-c356382a008f_1386799.jpg",
"locality": "Kirti Nagar Metro Station Road",
"areaName": "Kirti Nagar",
"costForTwo": "₹300 for two",
"cuisines": [
"Bakery",
"Desserts",
"Beverages"
],
"avgRating": 3.9,
"parentId": "1040",
"avgRatingString": "3.9",
"totalRatingsString": "70",
"sla": {
"deliveryTime": 15,
"lastMileTravel": 1.8,
"serviceability": "SERVICEABLE",
"slaString": "10-15 mins",
"lastMileTravelString": "1.8 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-09-12 02:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "android/static-assets/icons/big_rx.png",
"description": "bolt!"
},
{
"imageId": "newg.png",
"description": "Premium gourmet restaurant offering an elevated, high-quality food experience."
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
"description": "bolt!",
"imageId": "android/static-assets/icons/big_rx.png"
}
},
{
"attributes": {
"description": "Premium gourmet restaurant offering an elevated, high-quality food experience.",
"imageId": "newg.png",
"theme": ""
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "50% OFF",
"discountTag": "FLAT DEAL",
"logoCtx": {
"text": "BENEFITS"
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"isNewlyOnboarded": true,
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"priceComparisonComms": {}
},
"analytics": {
"context": "seo-data-dc4b4943-d948-414f-a6ca-4fd96e4e8c6f"
},
"cta": {
"link": "https://www.swiggy.com/city/delhi/theobroma-metro-station-road-kirti-nagar-rest1386799",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "1334079",
"name": "KFC",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/7/1/d7a72e1e-de5d-4daf-90bc-240270b04a4b_1334079.JPG",
"locality": "Epicah Mall",
"areaName": "Moti Nagar",
"costForTwo": "₹400 for two",
"cuisines": [
"Burgers",
"Fast Food",
"Rolls & Wraps"
],
"avgRating": 4.3,
"parentId": "547",
"avgRatingString": "4.3",
"totalRatingsString": "239",
"sla": {
"deliveryTime": 21,
"lastMileTravel": 1.5,
"serviceability": "SERVICEABLE",
"slaString": "15-20 mins",
"lastMileTravelString": "1.5 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-09-11 23:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "android/static-assets/icons/big_rx.png",
"description": "bolt!"
},
{
"imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
"description": "Top-rated for Bolt, based on user votes."
},
{
"imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
"description": "Top-rated for Burger, based on user votes."
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
"description": "bolt!",
"imageId": "android/static-assets/icons/big_rx.png"
}
},
{
"attributes": {
"description": "Top-rated for Bolt, based on user votes.",
"imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
"theme": ""
}
},
{
"attributes": {
"description": "Top-rated for Burger, based on user votes.",
"imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
"theme": ""
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "50% OFF",
"discountTag": "FLAT DEAL",
"logoCtx": {
"text": "BENEFITS"
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"priceComparisonComms": {}
},
"analytics": {
"context": "seo-data-dc4b4943-d948-414f-a6ca-4fd96e4e8c6f"
},
"cta": {
"link": "https://www.swiggy.com/city/delhi/kfc-epicah-mall-moti-nagar-rest1334079",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "1002383",
"name": "McDonald's",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/5f636a4b-bee7-4811-b5db-ae71d42c7a56_1002383.JPG",
"locality": "Najafgarh Road",
"areaName": "Moti Nagar",
"costForTwo": "₹400 for two",
"cuisines": [
"American",
"Fast Food",
"Beverages"
],
"avgRating": 4.5,
"parentId": "630",
"avgRatingString": "4.5",
"totalRatingsString": "2.6K+",
"sla": {
"deliveryTime": 19,
"lastMileTravel": 1.5,
"serviceability": "SERVICEABLE",
"slaString": "15-20 mins",
"lastMileTravelString": "1.5 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-09-11 22:45:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "android/static-assets/icons/big_rx.png",
"description": "bolt!"
},
{
"imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
"description": "Top-rated for Bolt, based on user votes."
},
{
"imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
"description": "Top-rated for Burger, based on user votes."
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
"description": "bolt!",
"imageId": "android/static-assets/icons/big_rx.png"
}
},
{
"attributes": {
"description": "Top-rated for Bolt, based on user votes.",
"imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
"theme": ""
}
},
{
"attributes": {
"description": "Top-rated for Burger, based on user votes.",
"imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
"theme": ""
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹52",
"logoCtx": {
"text": "BENEFITS"
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"priceComparisonComms": {}
},
"analytics": {
"context": "seo-data-dc4b4943-d948-414f-a6ca-4fd96e4e8c6f"
},
"cta": {
"link": "https://www.swiggy.com/city/delhi/mcdonalds-najafgarh-road-moti-nagar-rest1002383",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "559120",
"name": "Subway",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/4a1c040e-4d68-4682-8511-39cb609468c9_559120.jpg",
"locality": "Kirti Nagar",
"areaName": "Rajouri Garden",
"costForTwo": "₹350 for two",
"cuisines": [
"sandwich",
"Salads",
"wrap",
"Healthy Food"
],
"avgRating": 4.2,
"parentId": "2",
"avgRatingString": "4.2",
"totalRatingsString": "4.3K+",
"sla": {
"deliveryTime": 26,
"lastMileTravel": 1.7,
"serviceability": "SERVICEABLE",
"slaString": "20-25 mins",
"lastMileTravelString": "1.7 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-09-12 04:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Health%20Hub/RX%20BADGE/BADGE2.png",
"description": "Meals with high protein, low calorie and no added sugar"
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
"description": "Meals with high protein, low calorie and no added sugar",
"imageId": "Health%20Hub/RX%20BADGE/BADGE2.png",
"theme": ""
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹150 OFF",
"subHeader": "ABOVE ₹299",
"discountTag": "FLAT DEAL",
"logoCtx": {
"text": "BENEFITS"
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"priceComparisonComms": {}
},
"analytics": {
"context": "seo-data-dc4b4943-d948-414f-a6ca-4fd96e4e8c6f"
},
"cta": {
"link": "https://www.swiggy.com/city/delhi/subway-kirti-nagar-rajouri-garden-rest559120",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "66028",
"name": "Burger King",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/bae692fa-e513-4d44-94b7-0a1f3a0e404e_66028.jpg",
"locality": "Kirti Nagar Metro Station",
"areaName": "Kirti Nagar",
"costForTwo": "₹350 for two",
"cuisines": [
"Burgers",
"American"
],
"avgRating": 4.2,
"parentId": "166",
"avgRatingString": "4.2",
"totalRatingsString": "26K+",
"sla": {
"deliveryTime": 19,
"lastMileTravel": 2.1,
"serviceability": "SERVICEABLE",
"slaString": "15-20 mins",
"lastMileTravelString": "2.1 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-09-12 06:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "android/static-assets/icons/big_rx.png",
"description": "bolt!"
},
{
"imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
"description": "Top-rated for Burger, based on user votes."
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
"description": "bolt!",
"imageId": "android/static-assets/icons/big_rx.png"
}
},
{
"attributes": {
"description": "Top-rated for Burger, based on user votes.",
"imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
"theme": ""
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹59",
"logoCtx": {
"text": "BENEFITS"
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.6",
"ratingCount": "4.7K+"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"priceComparisonComms": {}
},
"analytics": {
"context": "seo-data-dc4b4943-d948-414f-a6ca-4fd96e4e8c6f"
},
"cta": {
"link": "https://www.swiggy.com/city/delhi/burger-king-metro-station-kirti-nagar-rest66028",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "683154",
"name": "La Pino'z Pizza",
"cloudinaryImageId": "231e86161a0091cd2137367c39b5943e",
"locality": "Tagore Market",
"areaName": "Kirti Nagar",
"costForTwo": "₹300 for two",
"cuisines": [
"Pizzas",
"Pastas",
"Italian",
"Fast Food"
],
"avgRating": 3.9,
"parentId": "4961",
"avgRatingString": "3.9",
"totalRatingsString": "6.0K+",
"sla": {
"deliveryTime": 23,
"lastMileTravel": 2.2,
"serviceability": "SERVICEABLE",
"slaString": "20-25 mins",
"lastMileTravelString": "2.2 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-09-12 05:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "50% OFF",
"discountTag": "FLAT DEAL",
"logoCtx": {
"text": "BENEFITS"
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.5",
"ratingCount": "360"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"priceComparisonComms": {}
},
"analytics": {
"context": "seo-data-dc4b4943-d948-414f-a6ca-4fd96e4e8c6f"
},
"cta": {
"link": "https://www.swiggy.com/city/delhi/la-pinoz-pizza-tagore-market-kirti-nagar-rest683154",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
}
]
   const Body = () => {
      return (
         <div className="body">
            <div className="search"> search</div>
            <div className="restaurant-container">
             <RestaurantCard resData = {reslist[0]}/>
             <RestaurantCard resData = {reslist[1]}/>
             <RestaurantCard resData = {reslist[2]}/>
             <RestaurantCard resData = {reslist[3]}/>
             <RestaurantCard resData = {reslist[4]}/>
             <RestaurantCard resData = {reslist[5]}/>
             <RestaurantCard resData = {reslist[6]}/>
             <RestaurantCard resData = {reslist[7]}/>
             <RestaurantCard resData = {reslist[14]}/>
             <RestaurantCard resData = {reslist[15]}/>
             <RestaurantCard resData = {reslist[13]}/>
             <RestaurantCard resData = {reslist[12]}/>
             <RestaurantCard resData = {reslist[10]}/>
             <RestaurantCard resData = {reslist[11]}/>
             <RestaurantCard resData = {reslist[8]}/>
             <RestaurantCard resData = {reslist[9]}/>
          
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