import { createStore } from "redux";
import { produce } from "immer";

const CHANGE_ADDRESS = "CHANGE_ADDRESS";

const initialState = {
  name: "Tarek",
  address: {
    country: "Egypt",
    city: "Alex",
    street: "123 Main st",
  },
};

const changeAddress = (street) => {
  return {
    type: CHANGE_ADDRESS,
    payload: street,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ADDRESS:
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("initialState", store.getState());

const unsbscribe = store.subscribe(() =>
  console.log("Updated State", store.getState())
);

store.dispatch(changeAddress("456 Main st."));

unsbscribe();
