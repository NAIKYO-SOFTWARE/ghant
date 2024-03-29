import { createSlice, current } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    todoList: JSON.parse(localStorage.getItem("todoList")) ?? []
};
export const todoSlice = createSlice({
    name: 'todoList',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const id = uuidv4()
            state.todoList.push({...action.payload, id})
            localStorage.setItem("todoList", JSON.stringify(state.todoList))
        },
        removeTodo: (state, action) => {
            const todos = [...current(state.todoList)]
            let newTodoList = todos.filter((todo) => (
                todo.id !== action.payload
            ))
            state.todoList = newTodoList
            localStorage.setItem("todoList", JSON.stringify(state.todoList))
        }
    }
});
export const { addTodo, removeTodo } = todoSlice.actions;
export const selectTodoList = (state) => state.todoList;
export default todoSlice.reducer;