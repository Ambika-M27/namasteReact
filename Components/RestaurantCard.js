
import React from "react";

const RestaurantCard = (props) => {
  const { resData } = props;
   const {cloudinaryImageId,cuisines,avgRating,costForTwo,deliveryTime }=resData?.data;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ "+
          cloudinaryImageId
          }
      />
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} ratings</h4>
      <h4>Rs.{costForTwo / 100} For Two</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
