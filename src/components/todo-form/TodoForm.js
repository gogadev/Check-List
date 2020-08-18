import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../../redux";
import { useDispatch } from "react-redux";

import img from "../../assets/png.png";

import "./todo-form.style.css";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const addToDo = (todo) => dispatch(addTodo(todo));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() === "") return;
    addToDo({
      id: uuidv4(),
      title: todo,
      complete: false,
    });
    setTodo("");
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <img className="img" src={img} alt="" />
      <input
        type="text"
        name="todo"
        placeholder="Add A Todo"
        value={todo}
        onChange={handleChange}
      />
      <button className="btn" type="submit">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
