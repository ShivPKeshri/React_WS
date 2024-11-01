import styles from "./container.module.css";
const InnerContainer = ({ children }) => {
  return <div className={styles.innerContainer}>{children}</div>;
};
export default InnerContainer;
