import userSlice from './reducer/userSlice';
import todoSlice from './reducer/todoSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    user: userSlice,
    todoList: todoSlice
  },
});