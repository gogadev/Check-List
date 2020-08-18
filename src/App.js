import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux";

import Header from "./components/header/Header";
import TodoForm from "./components/todo-form/TodoForm";
import TodoList from "./components/todo-list/TodoList";

import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <TodoForm />
      <TodoList />
    </Provider>
  );
};

export default App;
