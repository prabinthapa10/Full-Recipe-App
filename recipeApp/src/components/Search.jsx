import React, { useEffect, useState } from "react";
import styles from "./Search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "46bea26973144f3eb5c4ae166906e3ad"; //must define in envirmoment

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");

  //   syntax of use effect hook
  useEffect(() => {
    // async to make await untile the data is fetch
    async function fetchFood() {
      const response = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await response.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchFood();
  }, []);
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        name=""
        id=""
      />
    </div>
  );
}
