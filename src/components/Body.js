import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [ListOfRestaurant, setListOfRestaurant] = useState([
    {
      data: {
        id: "23",
        name: "Dominos",
        cuisines: ["biryani"],
        avgRating: "4.5",
        deliveryTime: "35",
        cloudinaryImageId: "fsoaipnxximw3zawgfew",
      },
    },
    {
      data: {
        id: "24",
        name: "kfc",
        cuisines: ["chicken, doPyaaza"],
        avgRating: "3.9",
        deliveryTime: "35",
        cloudinaryImageId: "ldtibwymvzehvmdwl8la",
      },
    },
    {
      data: {
        id: "25",
        name: "mcd",
        cuisines: ["chicken, doPyaaza"],
        avgRating: "4.1",
        deliveryTime: "35",
        cloudinaryImageId: "nyp7yrzwc1dc2xqfkydk",
      },
    }
  ]);

  // let ListOfRestaurant = [
  //   {
  //     data: {
  //       id: "23",
  //       name: "Dominos",
  //       cuisines: ["biryani"],
  //       avgRating: "4.5",
  //       deliveryTime: "35",
  //       cloudinaryImageId: "fsoaipnxximw3zawgfew",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "24",
  //       name: "kfc",
  //       cuisines: ["chicken, doPyaaza"],
  //       avgRating: "3.9",
  //       deliveryTime: "35",
  //       cloudinaryImageId: "ldtibwymvzehvmdwl8la",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "25",
  //       name: "mcd",
  //       cuisines: ["chicken, doPyaaza"],
  //       avgRating: "4.1",
  //       deliveryTime: "35",
  //       cloudinaryImageId: "nyp7yrzwc1dc2xqfkydk",
  //     },
  //   }
  // ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //onClick display the top rated restaurants(>=4.0 stars)
            // Filter logic here
            const filteredList = ListOfRestaurant.filter(
              (res) => res.data.avgRating >= 4.0
            ); //res represents each restaurant object inside the array of restaurants, can name it anything
            //basically we are overwriting the listofRestaurant array with a new list that satisfies the parameter[avgRating>4.0]
            setListOfRestaurant(filteredList);
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
