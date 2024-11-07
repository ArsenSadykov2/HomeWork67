import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ICounterState {
    value: number;
}

const initialState: ICounterState = {
    value: 0,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increase: (state) => {
            state.value += 1;
        },
        increaseByNumber: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
        decrease: (state) => {
            state.value -= 1;
        }
    },
});

export const counterReducer = counterSlice.reducer;
export const {increase, decrease, increaseByNumber} = counterSlice.actions;