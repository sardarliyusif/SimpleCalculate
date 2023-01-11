import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers:{
    plus: (state , action) => {
        state.count = Number(action.payload.firstInput) + Number(action.payload.secondInput);
    },
    minus: (state , action) => {
      state.count = Number(action.payload.firstInput) - Number(action.payload.secondInput);
    },
    multiple: (state , action) => {
      state.count = Number(action.payload.firstInput) * Number(action.payload.secondInput);
    },
    divide: (state , action) => {
      state.count = Number(action.payload.firstInput) / Number(action.payload.secondInput);
    },
  },

});

// Selector

export const getCount = (state) => state.counter.count

// Action
export const { plus , minus , multiple , divide } = counterSlice.actions

export default counterSlice.reducer