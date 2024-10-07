import React from "react";

import "./FoodDetails.module.css";
export default function FoodDetails({ foodId }) {
  return (
    <div>
      <h1>Food Details</h1>
      <p>{foodId}</p>
    </div>
  );
}
