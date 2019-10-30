import * as actionTypes from "../actions/actionTypes/ta-actionTypes";

const initialState = {
  stepNav: {
    step: 1
  },
  registrationFields: {
    firstName: "",
    lastName: "",
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
  },
  numberFields: {
    actualSsn: "",
    maskedSsn: "",
    ssnLocked: false
  }
};

const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_BASIC_INFO:
      return {
        ...state,
        registrationFields: {
          ...state.registrationFields,
          [action.registrationName]:
            state.registrationFields[action.registrationName]
        }
      };
    case actionTypes.ADD_SSN:
      return {
        ...state,
        numberFields: {
          ...state.numberFields,
          [action.bkcheckInfo]: state.numberFields[action.bkcheckInfo]
        }
      };
    case actionTypes.NEXT_STEP:
      return {
        ...state,
        stepNav: {
          ...state.stepNav,
          [action.stepCounter]: state.stepNav[action.stepCounter] + 1
        }
      };
    case actionTypes.PREVIOUS_STEP:
      return {
        ...state,
        registrationField: {
          ...state.stepNav,
          [action.stepCounter]: state.stepNav[action.stepCounter] - 1
        }
      };
    default:
      return state;
  }
};

export default registrationReducer;
