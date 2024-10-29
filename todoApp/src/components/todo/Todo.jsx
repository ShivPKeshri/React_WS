import { useState } from "react";
import Form from "../form/Form";
import TodoList from "./TodoList";
import Footer from "../footer/Footer";
const Todo = () => {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer
        completedTodos={completedTodos.length}
        totalTodos={todos.length}
      />
    </div>
  );
};

export default Todo;
