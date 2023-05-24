import rtkSlice from "@reduxjs/toolkit";
const { createSlice } = rtkSlice;
import { cakeActions } from "../cake/cakeSlice.js";

const initialState = {
  numOfIceCreams: 20,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCreams--;
    },
    restocked: (state, action) => {
      state.numOfIceCreams += action.payload;
    },
  },
  //   extraReducers: (builder) => {
  //     builder.addCase(cakeActions.ordered, (state) => {
  //       state.numOfIceCreams--;
  //     });
  //   },
  //   extraReducers: {
  //     ["cake/ordered"]: (state) => {
  //       state.numOfIceCreams--;
  //     },
  //   },
});

export const { actions: iceCreamActions, reducer: iceCreamReducer } =
  icecreamSlice;
