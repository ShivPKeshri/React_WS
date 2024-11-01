import { useEffect, useState } from "react";
import config from "../../envConfig";
import styles from "./foodDetails.module.css";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import FoodDetail from "./FoodDetail";

const FoodDetails = ({ food }) => {
  const [recipe, setRecipe] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${config.apiRecipesUrl}/${food}/information?apiKey=${config.apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRecipe(data);
        setIsLoading(false);
      });
  }, [food]);
  return (
    <div className={styles.recipeCard}>
      <FoodDetail recipe={recipe} />

      <h2>Ingredients</h2>
      <Ingredients recipe={recipe} isLoading={isLoading} />

      <h2>Instructions</h2>
      <Instructions recipe={recipe} isLoading={isLoading} />
    </div>
  );
};
export default FoodDetails;
