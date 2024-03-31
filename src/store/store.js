import { configureStore, combineReducers } from '@reduxjs/toolkit';
import todosReducer from './todos/todos.slice';


const rootReducer = combineReducers({
    todo: todosReducer,
})

export const store = configureStore({
    reducer: rootReducer,
})
