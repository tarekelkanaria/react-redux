import rtkSlice from "@reduxjs/toolkit";
const { createSlice } = rtkSlice;

const initialState = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes--;
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

export const { actions: cakeActions, reducer: cakeReducer } = cakeSlice;
