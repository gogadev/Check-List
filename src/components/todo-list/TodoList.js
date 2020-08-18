import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../../redux";

import "./todo-list.style.css";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const toggleToDo = (todoId) => dispatch(toggleTodo(todoId));
  const deleteToDo = (todoId) => dispatch(deleteTodo(todoId));

  return (
    <ul className="todo-list">
      {todos.length > 0 ? (
        todos.map((todo) => {
          return (
            <li key={todo.id} className="item">
              <input
                type="checkbox"
                checked={todo.complete}
                onChange={toggleToDo.bind(null, todo.id)}
              />
              <span className={todo.complete ? "complete" : null}>
                {todo.title}
              </span>
              <button
                className="button"
                onClick={deleteToDo.bind(null, todo.id)}
              >
                Delete
              </button>
            </li>
          );
        })
      ) : (
        <h2 className="empty-list">~Your check list is empty~</h2>
      )}
    </ul>
  );
};

export default TodoList;
