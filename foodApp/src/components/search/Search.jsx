import { useState, useEffect } from "react";
import config from "../../envConfig";
import style from "./search.module.css";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    fetch(
      `${config.apiComplexSearchUrl}?query=${query}&apiKey=${config.apiKey}`
    )
      .then((res) => res.json())
      .then((data) => setFoodData(data.results));
  }, [query]);

  return (
    <div className={style.searchContainer}>
      <input
        className={style.input}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
