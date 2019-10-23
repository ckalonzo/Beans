const initState = {
  step: 1,
  firstName: "",
  lastName: "",
  actualSsn: "",
  maskedSsn: "",
  ssnLocked: false,
  service: "",
  email: "",
  image: null,
  url: "",
  progress: 0,
  name: "",
  address: "",
  city: "",
  state: "State",
  zipCode: "",
  largeItems: "",
  selectedDate: "",
  selectedTime: "",
  flightOfStairs: "",
  truckLoads: "",
  typeOfTruck: "",
  specialInstructions: "",
  budget: ""
};

const registrationReducer = (state = initState, action) => {
  return state;
};

export default registrationReducer;
