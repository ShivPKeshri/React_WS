import { useState } from "react";
import style from "./form.module.css";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", completed: false });
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", completed: false });
  };
  return (
    <form className={style.todoForm} onSubmit={handleSubmit}>
      <div className={style.todoContainer}>
        <input
          className={style.todoInput}
          type="text"
          onChange={(e) => setTodo({ name: e.target.value, completed: false })}
          value={todo.name}
          placeholder="Add Todo"
        />
        <button className={style.todoButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
