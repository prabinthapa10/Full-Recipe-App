import React, { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FooItem from "./components/Foodtem";
import FoodDetails from "./components/FoodDetails";

export default function () {
  // state variable to store food data
  const [foodData, setFoodData] = useState([]);

  // to store foodId which clicked
  const [foodId, setFoodId] = useState("");
  return (
    <div>
      <>
        <Nav />
        <Search foodData={foodData} setFoodData={setFoodData} />
        <Container>
          <InnerContainer>
            <FoodList setFoodId={setFoodId} foodData={foodData} />
          </InnerContainer>
          <InnerContainer>
            <FoodDetails foodId={foodId} />
          </InnerContainer>
        </Container>
      </>
    </div>
  );
}
