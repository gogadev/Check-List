import { createStore } from "redux";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  todos: [
    { id: uuidv4(), title: "Grocery Shopping", complete: true },
    { id: uuidv4(), title: "Do Laundry", complete: true },
    { id: uuidv4(), title: "Study", complete: false },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          return todo.id === action.payload
            ? { ...todo, complete: !todo.complete }
            : todo;
        }),
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => {
          return todo.id !== action.payload;
        }),
      };
    default:
      return state;
  }
};

// Actions

export const addTodo = (todo) => ({
  type: "ADD_TODO",
  payload: todo,
});

export const toggleTodo = (todoId) => ({
  type: "TOGGLE_TODO",
  payload: todoId,
});

export const deleteTodo = (todoId) => ({
  type: "DELETE_TODO",
  payload: todoId,
});

export const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
