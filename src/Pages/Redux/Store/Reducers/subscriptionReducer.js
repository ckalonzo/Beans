import {
  ADD_TO_CART,
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
  ]
};

const SubscriptionReducer = (state = initState, action) => {
  if (action.type === ADD_TO_CART) {
    let addedSubscription = state.subscriptions.find(
      subscription => subscription.id === action.id
    );
    //check if the action id exists in the addedSubscriptions
    let existed_subscription = state.addedSubscriptions.find(
      subscription => action.id === subscription.id
    );

    if (existed_subscription) {
      addedSubscription.quantity += 1;
      let newCounter = state.counter + 1;
      return {
        ...state,
        total: state.total + addedSubscription.price,
        counter: newCounter
      };
    } else {
      addedSubscription.quantity = 1;
      let newCounter = state.counter + 1;
      //calculating the total
      let newTotal = state.total + addedSubscription.price;

      return {
        ...state,
        addedSubscriptions: [...state.addedSubscriptions, addedSubscription],
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
  return state;
};

export default SubscriptionReducer;
