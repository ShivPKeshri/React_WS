import TodoItem from "./TodoItem";
import style from "./todo.module.css";
export default function TodoList({ todos, setTodos }) {
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.completed) - Number(b.completed));

  // Anther way to sort  on completed
  // const completedTodos = todos.filter((todo) => todo.completed);
  // const unCompletedTodos = todos.filter((todo) => !todo.completed);
  // const sortedTodos = [...unCompletedTodos, ...completedTodos];

  return (
    <div className={style.todoList}>
      {sortedTodos.map((todo, index) => (
        <TodoItem
          key={todo.name + index}
          item={todo}
          todos={todos}
          setTodos={setTodos}
          id={todo.name + index}
        />
      ))}
    </div>
  );
}
