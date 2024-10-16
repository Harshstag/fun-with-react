import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hellow World" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: nanoid(),
        text: action.payload,
      });
    },
    removeTodo: (state, action) => {
      //   state.todos.splice(state.todos.indexOf(action.payload), 1);
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const existingTodo = state.todos.filter((todo) => todo.id === id);
      if (existingTodo) {
        existingTodo.text = text;
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
