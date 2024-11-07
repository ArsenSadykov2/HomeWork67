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
                state.info = 'Pin Granted';
                state.status = 'Granted';
            } else {
                state.info = 'Pin Denied';
                state.status = 'Denied';
            }
        },
        remove: (state) => {
            state.value = state.value.slice(0, -1);
        },
    },
});

export const counterReducer = counterSlice.reducer;
export const {increaseByNumber, check, remove} = counterSlice.actions;