import React, { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import Container from "./components/Container";

export default function () {
  // state variable to store food data
  const [foodData, setFoodData] = useState([]);
  return (
    <div>
      <>
        <Nav />
        <Search foodData={foodData} setFoodData={setFoodData} />
        <Container>
          <FoodList foodData={foodData} />
        </Container>
      </>
    </div>
  );
}
