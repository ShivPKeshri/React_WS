import Instruction from "./Instruction";
import style from "./foodDetails.module.css";

const Instructions = ({ recipe, isLoading }) => {
  return (
    <div className={style.recipeInstructions}>
      <ol>
        {isLoading
          ? "Loading..."
          : recipe.analyzedInstructions[0].steps.map((instruction) => (
              <Instruction key={instruction.number} instruction={instruction} />
            ))}
      </ol>
    </div>
  );
};

export default Instructions;
