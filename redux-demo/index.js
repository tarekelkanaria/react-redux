import {
  createStore,
  combineReducers,
  applyMiddleware,
  bindActionCreators,
} from "redux";
import reduxLogger from "redux-logger";

const BUY_CAKE = "BUY_CAKE";
const RESTOCK_CAKE = "RESTOCK_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";
const RESTOCK_ICECREAM = "RESTOCK_ICECREAM";
const logger = reduxLogger.createLogger();

function buyCake() {
  return {
    type: BUY_CAKE,
    payload: 1,
  };
}

function cakeRestocking(quantity = 1) {
  return {
    type: RESTOCK_CAKE,
    payload: quantity,
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    payload: 1,
  };
}

function iceCreamRestocking(quantity = 1) {
  return {
    type: RESTOCK_ICECREAM,
    payload: quantity,
  };
}

// const initialState = {
//   numOfCakes: 10,
//   numOfIceCreams: 20,
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes - 1,
//       };

//     case BUY_ICECREAM:
//       return {
//         ...state,
//         numOfIceCreams: state.numOfIceCreams - 1,
//       };
//     default:
//       return state;
//   }
// };

const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCreamState = {
  numOfIceCreams: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case RESTOCK_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    case RESTOCK_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams + action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() => {});

const actions = bindActionCreators(
  { buyCake, buyIceCream, cakeRestocking, iceCreamRestocking },
  store.dispatch
);
actions.buyCake();
actions.buyCake();
actions.buyCake();
actions.buyIceCream();
actions.buyIceCream();
actions.cakeRestocking(3);
actions.iceCreamRestocking(2);

unsubscribe();
