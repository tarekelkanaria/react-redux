import { combineReducers } from "redux";
import cakeReducer from "./cake/cake-reducer";
import iceCreamReducer from "./ice-cream/ice-cream-reducer";
import usersReducer from "./users/users-reducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  users: usersReducer,
});

export default rootReducer;
