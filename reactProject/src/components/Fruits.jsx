import Fruit from "./Fruit";
export default ({ fruits }) => {
  return (
    <ul>
      {fruits.map((fruit) => (
        <Fruit key={fruit.id} {...fruit} />
      ))}
    </ul>
  );
};
