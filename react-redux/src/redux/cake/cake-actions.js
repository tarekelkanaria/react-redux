import { BUY_CAKE } from "./cake-types";

export const buyCake = (num = 1) => {
  return {
    type: BUY_CAKE,
    payload: num,
  };
};
