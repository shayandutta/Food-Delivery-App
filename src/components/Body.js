import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [ListOfRestaurant, setListOfRestaurant] = useState(restaurantList)
 
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //onClick display the top rated restaurants(>=4.0 stars)
            // Filter logic here
            const filteredList = ListOfRestaurant.filter(
              (restaurant) => restaurant.data.avgRating >= 4.0
            ); //res represents each restaurant object inside the array of restaurants, can name it anything
            //basically we are overwriting the listofRestaurant array with a new list that satisfies the parameter[avgRating>4.0]
            setListOfRestaurant(filteredList)
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {
          ListOfRestaurant.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          )) //map the restaurantList array here
        }
      </div>
    </div>
  );
};

export default Body;
