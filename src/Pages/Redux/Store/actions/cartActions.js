import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY
} from "../actions/actionTypes/cart-actionTypes";

//add cart action
export const addToCart = (id, count) => {
  return {
    type: ADD_TO_CART,
    id,
    count
  };
};
// updateCartItem
const updateCartItem = (id, count) => ({
  type: "UPDATE_CART_ITEM",
  id,
  count
});
//remove item action
export const removeItem = id => {
  return {
    type: REMOVE_ITEM,
    id
  };
};
//subtract qt action
export const subtractQuantity = id => {
  return {
    type: SUB_QUANTITY,
    id
  };
};
//add qt action
export const addQuantity = id => {
  return {
    type: ADD_QUANTITY,
    id
  };
};
