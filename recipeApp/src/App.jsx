import React, { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";

export default function () {
  // state variable to store food data
  const [foodData, setFoodData] = useState([]);
  return (
    <div>
      <>
        <Nav />
        <Search foodData={foodData} setFoodData={setFoodData} />
        <FoodList foodData={foodData} />
      </>
    </div>
  );
}
