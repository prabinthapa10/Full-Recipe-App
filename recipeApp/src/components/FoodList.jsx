import React from "react";
import FooItem from "./Foodtem";

export default function FoodList({ foodData }) {
  return (
    <div>
      {" "}
      <div>
        {foodData.map((food) => (
          <FooItem key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
}
