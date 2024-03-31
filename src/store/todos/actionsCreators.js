import axios from "axios";
import { todosSlice } from "./todos.slice";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://dummyjson.com/";

export const fetchTodos =
    ({ limit = 20, skip = 0 }) =>
    async (dispatch) => {
        try {
            dispatch(todosSlice.actions.todosFetching());
            const response = await axios.get(`${BASE_URL}todos`, {
                params: {
                    limit,
                    skip,
                },
            });
            dispatch(
                todosSlice.actions.todosFetchingSuccess(response.data.todos)
            );
        } catch (error) {
            dispatch(
                todosSlice.actions.todosFetchingError("Ошибка получения постов")
            );
        }
    };

export const fetchTodosThunk = createAsyncThunk(
    "todos/fetchAll",
    async ({ limit = 20, skip = 0 }, thunkApi) => {
        try {
            const response = await axios.get(`${BASE_URL}todos`, {
                params: {
                    limit,
                    skip,
                },
            });
            return response.data.todos;
        } catch (error) {
            return thunkApi.rejectWithValue('Ошибка получения постов')
        }
    }
);
