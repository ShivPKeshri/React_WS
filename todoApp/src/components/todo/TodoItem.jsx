import style from "./todo.module.css";
const TodoItem = (props) => {
  const handleDelete = (item) => {
    props.setTodos(props.todos.filter((todo) => todo.name !== item));
  };
  const toggleSpike = (item) => {
    props.setTodos(
      props.todos.map((todo) =>
        todo.name === item ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const spikeClass = props.item.completed ? style.completed : "";
  return (
    <div className={style.todoItems}>
      <div className={style.todoItem} id={props.item.name}>
        <span
          className={spikeClass}
          onClick={() => toggleSpike(props.item.name)}
        >
          {props.item.name}
        </span>
        <span className={style.close}>
          <button
            onClick={() => handleDelete(props.item.name)}
            className={style.deleteButton}
          >
            x
          </button>
        </span>
      </div>
      <hr className={style.hrLine} />
    </div>
  );
};

export default TodoItem;
