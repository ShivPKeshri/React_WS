import styles from "./foodDetails.module.css";
const FoodDetail = ({ recipe }) => {
  return (
    <>
      <h1 className={styles.recipeTitle}>{recipe.title}</h1>
      <img className={styles.recipeImage} src={recipe.image} alt="" />

      <div className={styles.recipeDetails}>
        <span>
          <strong>⌚{recipe.readyInMinutes}</strong>
        </span>
        <span>
          👩‍👧‍👦<strong>Serves {recipe.servings}</strong>
        </span>
        <span>{recipe.vegetarian && <strong>🌱Vegetarian</strong>}</span>
        <span>{recipe.vegan && <strong>🐮Vegan</strong>}</span>
        <span>{recipe.glutenFree && <strong>🌱Gluten Free</strong>}</span>
      </div>

      <div>
        💲
        <span>
          <strong>{recipe.pricePerServing}</strong>
        </span>
      </div>
    </>
  );
};
export default FoodDetail;
