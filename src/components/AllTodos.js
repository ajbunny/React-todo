import NewTodo from "./NewTodo";
import { getTodos } from "../services/todos-api";
import { useState, useEffect } from "react";
import Todo from "./Todo";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    getTodos().then((res) => setTodos(res.data));
  }, []);
  return (
    <div id="list">
      <ol>
        {todos.map((todo) => {
          return (
            <li>
              <a href={`/${todo._id}`}>
                <h3 className={`${todo.complete ? "complete" : ""}`}>
                  {todo.description}
                </h3>
              </a>
            </li>
          );
        })}
      </ol>
      <NewTodo />
    </div>
  );
}

