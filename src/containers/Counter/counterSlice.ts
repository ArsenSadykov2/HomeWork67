import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ICounterState {
    value: string ;
    status: string;
    message: string;
}

const initialState: ICounterState = {
    value: '',
    status: '',
    message: '',
};

const correctPin = '1337';

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increaseByNumber: (state, action: PayloadAction<number>) => {
            if(Number(state.value.length) < 4) {
                state.value += action.payload;
            }
        },
        check: (state) => {
            if (state.value === correctPin) {
                state.status = 'success';
                state.message = 'Access Granted';
            } else {
                state.status = 'error';
                state.message = 'Access Denied';
            }
        },
        removeChar: (state) => {
            state.value = state.value.slice(0, -1);
        },
        resetInput: (state) => {
            state.value = '';
            state.status = '';
            state.message = '';
        },
    },
});

export const counterReducer = counterSlice.reducer;
export const {increaseByNumber, check, removeChar, resetInput} = counterSlice.actions;