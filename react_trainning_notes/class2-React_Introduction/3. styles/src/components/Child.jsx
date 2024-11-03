import styles from "./childStyle.module.css";
const Child = () => {
  return (
    <div>
      <h1 className={styles.myText}> Child</h1>
    </div>
  );
};
export default Child;
