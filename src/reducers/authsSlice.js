import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useState } from "react";
import axios from "axios";

const initialState = {
    isLoading: false,
    isSuccess: false,

    message: "",
    isError: "",
    detail: [],
};

export const getTour = createAsyncThunk("auth/getTour", async(thunkAPI) => {
    try {
        const response = await axios.get("https://apifortour.onrender.com/");
        const { tours } = response.data;

        return tours;
    } catch (err) {
        const message =
            err.response ||
            err.response.data ||
            err.response.data.message ||
            err.message ||
            err.toString();
        return thunkAPI.rejectwithValue(message);
    }
});

const tourSlice = createSlice({
    name: "tour",
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.isLoading = false;
            state.message = "";
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTour.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getTour.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.detail = action.payload;
            })
            .addCase(getTour.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.detail = null;
            });
    },
});

export const { reset } = tourSlice.actions;
export default tourSlice.reducer;

// export const { reset } = authSlice.actions;
// export default authSlice.reducer;