import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todoList: [localStorage.getItem("todoList")]
};
export const todoSlice = createSlice({
    name: 'todoList',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todoList.push(action.payload)
            localStorage.setItem("todoList", state.todoList)
        },
        removeTodo: (state, action) => {
            
        }
    }
});
export const { addTodo, removeTodo } = todoSlice.actions;
export const selectTodoList = (state) => state.todoList;
export default todoSlice.reducer;