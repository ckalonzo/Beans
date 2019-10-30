import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  CARTTOTALITEMS
} from "../actions/actionTypes/ta-actionTypes";

const initState = {
  items: [
    { id: 1, title: "1 Bids", desc: "1 Bid from TruckAway", price: 0.99 },
    { id: 2, title: "3 Bids", desc: "3 Bids from TruckAway", price: 2.99 },
    { id: 3, title: "5 Bids", desc: "5 Bids from TruckAway", price: 4.99 },
    { id: 4, title: "10 Bids", desc: "10 Bids from TruckAway", price: 8.99 },
    { id: 5, title: "15 Bids", desc: "15 Bids from TruckAway", price: 13.99 },
    { id: 6, title: "20 Bids", desc: "20 Bids from TruckAway", price: 17.99 }
  ],
  addedItems: [],
  total: 0,
  counter: 0
};
const cartReducer = (state = initState, action) => {
  //INSIDE Single-bid-table COMPONENT
  if (action.type === ADD_TO_CART) {
    let addedItem = state.items.find(item => item.id === action.id);
    //check if the action id exists in the addedItems
    let existed_item = state.addedItems.find(item => action.id === item.id);

    if (existed_item) {
      addedItem.quantity += 1;
      let newCounter = state.counter + 1;
      return {
        ...state,
        total: state.total + addedItem.price,
        counter: newCounter
      };
    } else {
      addedItem.quantity = 1;
      let newCounter = state.counter + 1;
      //calculating the total
      let newTotal = state.total + addedItem.price;

      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal,
        counter: newCounter
      };
    }
  }
  if (action.type === REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find(item => action.id === item.id);
    let new_items = state.addedItems.filter(item => action.id !== item.id);
    let newCounter = state.counter - 1;
    //calculating the total
    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    console.log(itemToRemove);
    return {
      ...state,
      addedItems: new_items,
      total: newTotal,
      counter: newCounter
    };
  }

  //INSIDE CART COMPONENT
  if (action.type === ADD_QUANTITY) {
    let addedItem = state.items.find(item => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    let newCounter = state.counter + 1;
    return {
      ...state,
      total: newTotal,
      counter: newCounter
    };
  }
  if (action.type === SUB_QUANTITY) {
    let addedItem = state.items.find(item => item.id === action.id);
    //if the qt == 0 then it should be removed
    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter(item => item.id !== action.id);
      let newTotal = state.total - addedItem.price;
      let newCounter = state.counter - 1;
      return {
        ...state,
        addedItems: new_items,
        total: newTotal,
        counter: newCounter
      };
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;
      let newCounter = state.counter - 1;
      return {
        ...state,
        total: newTotal,
        counter: newCounter
      };
    }
  }
  return state;
};

export default cartReducer;
