import React from "react";
import styles from "./FoodItem.module.css";
export default function FooItem({ setFoodId, food }) {
  function viewRecipe(id) {
    console.log("Clicked", id);
    setFoodId(id);
  }
  return (
    <div>
      <div className={styles.itemContainer}>
        <img className={styles.image} src={food.image} alt={food.title} />
        <h1>{food.title}</h1>
        <button onClick={() => viewRecipe(food.id)} className={styles.button}>
          View Recipes
        </button>
      </div>
    </div>
  );
}
