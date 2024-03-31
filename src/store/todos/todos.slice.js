import { createSlice } from "@reduxjs/toolkit";
import { fetchTodosThunk } from "./actionsCreators";

const initialState = {
    todos: [],
    isLoading: false,
    error: "",
    count: 0,
};

export const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        todosFetching(state) {
            state.isLoading = true;
        },
        todosFetchingSuccess(state, action) {
            state.isLoading = false;
            state.error = "";
            state.todos = action.payload;
        },
        todosFetchingError(state, action) {
            state.isLoading = false;
            state.error = action.payload;
            state.todos = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodosThunk.pending.type, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchTodosThunk.fulfilled.type, (state, action) => {
                state.isLoading = false;
                state.error = "";
                state.todos = action.payload;
            })
            .addCase(fetchTodosThunk.rejected.type, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                state.todos = [];
            });
    },
});

export default todosSlice.reducer;
