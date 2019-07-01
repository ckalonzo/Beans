const initState = {
  subscription: [
    {
      id: 1,
      title: "Starter",
      desc1: "10 users included",
      desc2: "2 GB of storage",
      desc3: "Email support",
      desc4: "Help center access",
      price: 1000
    },
    {
      id: 2,
      title: "Pro",
      desc1: "10 users included",
      desc2: "2 GB of storage",
      desc3: "Email support",
      desc4: "Help center access",
      price: 1000
    },
    {
      id: 3,
      title: "Premium",
      desc1: "10 users included",
      desc2: "2 GB of storage",
      desc3: "Email support",
      desc4: "Help center access",
      price: 1000
    }
  ]
};

const monthlySubscriptionReducer = (state = initState, action) => {
  return state;
};
