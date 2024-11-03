import { ActionTypes } from "../constants/action-types";

const initialState = {
  numberOfCart: 0,
  inCarts: [],
};

export const cartReducer = (state = initialState, { type, payload }) => {
  // eslint-disable-next-line default-case
  switch (type) {
    case ActionTypes.GET_NUMBER_IN_CART:
      return {
        ...state,
      };
    case ActionTypes.ADD_TO_CART:
      if (state.numberOfCart === 0) {
        let item = {
          ...payload,
          quantity: 1,
        };
        state.inCarts.push(item);
      } else {
        let check = false;
        state.inCarts.map((item, index) => {
          if (item._id === payload._id) {
            state.inCarts[index].quantity++;
            check = true;
          }
        });
        if (!check) {
          let _item = {
            ...payload,
            quantity: 1,
          };
          state.inCarts.push(_item);
        }
      }
      return {
        ...state,
        numberOfCart: state.numberOfCart + 1,
      };
    default:
      return state;
  }
};
