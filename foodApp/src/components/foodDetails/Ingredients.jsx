import style from "./foodDetails.module.css";
import Ingredient from "./Ingredient";
const Ingredients = ({ recipe, isLoading }) => {
  return (
    <div className={style.recipeIngredients}>
      {isLoading
        ? "Loading..."
        : recipe.extendedIngredients.map((ingredient) => (
            <Ingredient key={ingredient.id} ingredient={ingredient} />
          ))}
    </div>
  );
};
export default Ingredients;
