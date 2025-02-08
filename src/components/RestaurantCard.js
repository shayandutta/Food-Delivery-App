import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
  
    const { cloudinaryImageId, name, cuisines, avgRating, deliveryTime } = //object destructuring
      resData?.data; // optional chaining so that we dont repeat the steps again and again
  
    return (
      <div className="restaurant-card">
        <img
          className="restaurant-image"
          src={
            CDN_URL +
            cloudinaryImageId
          }
        />
        <h4>{name}</h4>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{avgRating} ⭐</h5> 
        <h5>{deliveryTime} mins</h5> 
      </div>
    );

}

  export default RestaurantCard;