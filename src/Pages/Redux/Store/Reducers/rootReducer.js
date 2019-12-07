import authReducer from "./authReducer";
import JobPostReducer from "./JobPostReducer";
import cartReducer from "./cartReducer";
import StatesListReducer from "./stateReducer";
import ServiceListReducer from "./serviceReducer";
import CounterReducer from "./counterReducer";
import BidsReducer from "./bidsReducer";

import ProfileReducer from "./profileReducer";
import SubmitBidReducer from "./SubmitBidReducer";
import deleteJobReducer from "./deleteJobReducer";
import RegistrationReducer from "./registrationReducer";
import monthlySubscriptionReducer from "./monthlyMembershipReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
const rootReducer = combineReducers({
  auth: authReducer,
  project: JobPostReducer,
  signUpRegistration: RegistrationReducer,
  submitBid: SubmitBidReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  userData: ProfileReducer,
  counter: CounterReducer,
  bids: BidsReducer,
  items: cartReducer,
  cart: cartReducer,
  subscription: monthlySubscriptionReducer,
  deleteJob: deleteJobReducer,
  registration: RegistrationReducer,
  statesList: StatesListReducer,
  serviceList: ServiceListReducer
});

export default rootReducer;
