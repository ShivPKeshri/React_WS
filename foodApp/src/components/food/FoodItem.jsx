import styles from "./food.module.css";
const FoodItem = ({ food, setSelectedFood }) => {
  return (
    <div className={styles.foodContainer}>
      <img className={styles.foodImage} src={food.image} alt={food.title} />
      <div className={styles.foodContent}>
        <p className={styles.foodTitle}>{food.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => setSelectedFood(food.id)}
          className={styles.foodViewRecipeButton}
        >
          {" "}
          View Recipe
        </button>
      </div>
    </div>
  );
};
export default FoodItem;
