import React, { useEffect, useState } from "react";
import styles from "./FoodDetails.module.css";

import "./FoodDetails.module.css";
export default function FoodDetails({ foodId }) {
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "46bea26973144f3eb5c4ae166906e3ad";

  // store data got from api'
  const [recipeInfo, setRecipeInfo] = useState({});

  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await response.json();
      console.log(data);
      setRecipeInfo(data);
      setLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div>
        <div>
          <h1 className={styles.title}>{recipeInfo.title}</h1>
          <img src={recipeInfo.image} alt="image" />
          <span>
            <strong>⌚{recipeInfo.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>👪 Serves {recipeInfo.servings}</strong>
          </span>
          <span>{recipeInfo.vegetarian ? "Veg 🍠" : "Non Veg 🐃"}</span>
          <div>
            <span>💲{recipeInfo.pricePerServing / 100} Per serving</span>
          </div>

          <div>
            <h1>Instruction</h1>
            {isLoading ? (
              <p>Loading.</p>
            ) : (
              recipeInfo.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
