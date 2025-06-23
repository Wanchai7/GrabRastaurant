import React from "react";
import Card from "./card";

const Restaurants = ({ restaurants }) => {
  return (
    <div className="flex">
      <div className="flex flex-wrap justify-center gap-4 mx-3.5">
        {restaurants &&
          restaurants.map((restaurant) => {
            return (
              <Card
                key={restaurant.id}
                title={restaurant.title}
                type={restaurant.type}
                img={restaurant.img}
              />
            );
          })}
        
      </div>
    </div>
  );
};

export default Restaurants;
