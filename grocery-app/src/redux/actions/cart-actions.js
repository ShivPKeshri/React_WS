import { ActionTypes } from "../constants/action-types";

export const addToCart = (product) => {
  //   console.log(product);
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: product,
  };
};
