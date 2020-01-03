import {
  ADDSUB_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  CARTTOTALITEMS
} from "../actions/actionTypes/ta-actionTypes";

const initState = {
  subscriptions: [
    {
      id: 20,
      title: "Starter",
      desc1: "10 users included",
      desc2: "2 GB of storage",
      desc3: "Email support",
      desc4: "Help center access",
      price: 1000
    },
    {
      id: 12,
      title: "Pro",
      desc1: "10 users included",
      desc2: "2 GB of storage",
      desc3: "Email support",
      desc4: "Help center access",
      price: 2500
    },
    {
      id: 13,
      title: "Premium",
      desc1: "10 users included",
      desc2: "2 GB of storage",
      desc3: "Email support",
      desc4: "Help center access",
      price: 3000
    }
  ],
  addedItems: [],
  total: 0,
  counter: 0
};

const SubscriptionReducer = (state = initState, action) => {
  if (action.type === ADDSUB_TO_CART) {
    let addedItem = state.subscriptions.find(item => item.id === action.id);
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
    let subscriptionToRemove = state.addedSubscriptions.find(
      subscription => action.id === subscription.id
    );
    let new_subscriptions = state.addedSubscriptions.filter(
      subscription => action.id !== subscription.id
    );
    let newCounter = state.counter - 1;
    //calculating the total
    let newTotal =
      state.total - subscriptionToRemove.price * subscriptionToRemove.quantity;
    console.log(subscriptionToRemove);
    return {
      ...state,
      addedSubscriptions: new_subscriptions,
      total: newTotal,
      counter: newCounter
    };
  }
  if (action.type === ADD_QUANTITY) {
    let addedItem = state.subscriptions.find(item => item.id === action.id);
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
    let addedItem = state.subscriptions.find(item => item.id === action.id);
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

export default SubscriptionReducer;
