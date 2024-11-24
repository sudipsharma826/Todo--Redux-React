import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todoSlice';

const store = configureStore({
  reducer: {
    todostore: todoReducer,
  },
});

export default store;
