import React from "react";
import FooItem from "./Foodtem";

export default function FoodList({ setFoodId, foodData }) {
  return (
    <div>
      {" "}
      <div>
        {foodData.map((food) => (
          <FooItem setFoodId={setFoodId} key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
}
