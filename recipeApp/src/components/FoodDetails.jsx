import React, { useEffect, useState } from "react";

import "./FoodDetails.module.css";
export default function FoodDetails({ foodId }) {
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "46bea26973144f3eb5c4ae166906e3ad";

  // store data got from api'
  const [recipeInfo, setRecipeInfo] = useState({});

  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await response.json();
      console.log(data);
      setRecipeInfo(data);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <h1>Food Details</h1>
      {foodId}
      {recipeInfo.dishTypes}
    </div>
  );
}
