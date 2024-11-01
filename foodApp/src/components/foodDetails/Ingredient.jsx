import style from "./foodDetails.module.css";
const Ingredient = ({ ingredient }) => {
  return (
    <div>
      <div className={style.ingredientContainer}>
        <div className={style.ingredientImageContainer}>
          <img
            className={style.ingredientImage}
            src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
            alt=""
          />
        </div>
        <div className={style.ingredientDetails}>
          <div className={style.ingredientName}>{ingredient.name}</div>
          <div className={style.ingredientAmount}>
            {ingredient.amount} {ingredient.unit}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ingredient;
