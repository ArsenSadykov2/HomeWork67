import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ICounterState {
    value: string ;
    info: string;
    status: string;
}

const initialState: ICounterState = {
    value: '',
    info: '',
    status: '',
};

const rightPin = '4444';

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increaseByNumber: (state, action: PayloadAction<number>) => {
            if(Number(state.value.length) < 4) {
                state.value += action.payload;
            }
        },
        check: (state,) => {
            if (state.value === rightPin) {
                state.info = 'Access Granted';
            } else {
                state.info = 'Access Denied';
            }
        },
        changeColor: (state) => {
            if(state.info === 'Access Granted') {
                state.status = 'Granted';
            } else if(state.info === 'Access Denied') {
                state.status = 'Denied';
            }
        },
        remove: (state) => {
            state.value = state.value.slice(0, -1);
        },
        resetInput: (state) => {
            state.value = '';
            state.info = '';
            state.status = '';
        },
    },
});

export const counterReducer = counterSlice.reducer;
export const {increaseByNumber, check,changeColor, resetInput, remove} = counterSlice.actions;