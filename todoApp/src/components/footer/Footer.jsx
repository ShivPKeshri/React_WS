import style from "./footer.module.css";
export default function Footer({ completedTodos, totalTodos }) {
  return (
    <div className={style.footer}>
      <span className={style.footerSpan}>
        Completed Todos: {completedTodos}
      </span>
      <span className={style.footerSpan}>Total Todos: {totalTodos}</span>
    </div>
  );
}
