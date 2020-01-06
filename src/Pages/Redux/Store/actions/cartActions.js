import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  TOTAL_BIDS
} from "./actionTypes/ta-actionTypes";

//add cart action
export const addToCart = (id, counter) => {
  return {
    type: ADD_TO_CART,
    id,
    counter
  };
};
export const totalBids = numOfBids => {
  return {
    type: TOTAL_BIDS,
    numOfBids
  };
};
//remove item action
export const removeItem = (id, counter) => {
  return {
    type: REMOVE_ITEM,
    id,
    counter
  };
};
//subtract qt action
export const subtractQuantity = (id, counter) => {
  return {
    type: SUB_QUANTITY,
    id,
    counter
  };
};
//add qt action
export const addQuantity = (id, counter) => {
  return {
    type: ADD_QUANTITY,
    id,
    counter
  };
};
