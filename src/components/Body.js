import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";



const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        {
            restaurantList.map((restaurant) => (
              <RestaurantCard key={restaurant.data.id} resData={restaurant} />
            )) //map the restaurantList array here
          }
      </div>
    </div>
  );
};

export default Body;
