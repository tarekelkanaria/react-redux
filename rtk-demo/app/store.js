import rtkStore from "@reduxjs/toolkit";
import reduxLogger from "redux-logger";
import { cakeReducer } from "../features/cake/cakeSlice.js";
import { iceCreamReducer } from "../features/icecream/icecreamSlice.js";
import { usersReducer } from "../features/users/usersSlice.js";

const { configureStore } = rtkStore;
const { createLogger } = reduxLogger;

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    users: usersReducer,
  },
  middleware: (defaultMiddleware) => [...defaultMiddleware(), createLogger()],
});

export default store;
