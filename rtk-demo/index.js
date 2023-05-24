import store from "./app/store.js";
import { cakeActions } from "./features/cake/cakeSlice.js";
import { iceCreamActions } from "./features/icecream/icecreamSlice.js";
import { fetchUsers } from "./features/users/usersSlice.js";

console.log("Initial State", store.getState());

const unsubscribe = store.subscribe(() => {});

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(3));
// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.restocked(2));
store.dispatch(fetchUsers());

unsubscribe();
