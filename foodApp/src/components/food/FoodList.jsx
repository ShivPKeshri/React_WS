import FoodItem from "./FoodItem";
import style from "./food.module.css";

const FoodList = ({ foodData, setSelectedFood }) => {
  return (
    <div>
      {foodData.map((food) => (
        <FoodItem key={food.id} food={food} setSelectedFood={setSelectedFood} />
      ))}
    </div>
  );
};
export default FoodList;
