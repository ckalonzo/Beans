import authReducer from "./authReducer";
import JobPostReducer from "./JobPostReducer";
import cartReducer from "./cartReducer";
import StatesListReducer from "./stateReducer";
import ServiceListReducer from "./serviceReducer";
import CounterReducer from "./counterReducer";
import BidsReducer from "./bidsReducer";
import NotificationReducer from "./notification";
import MessageReducer from "./messageReducer";
import ProfileReducer from "./profileReducer";
import contractorProfileReducer from "./contractorProfileReducer";
import SubmitBidReducer from "./SubmitBidReducer";
import deleteJobReducer from "./deleteJobReducer";
import RegistrationReducer from "./registrationReducer";
import SubscriptionReducer from "./subscriptionReducer";
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
  notifications: NotificationReducer,
  message: MessageReducer,
  items: cartReducer,
  cart: cartReducer,
  subscriptions: SubscriptionReducer,
  deleteJob: deleteJobReducer,
  contractorProfile: contractorProfileReducer,
  registration: RegistrationReducer,
  statesList: StatesListReducer,
  serviceList: ServiceListReducer
});

export default rootReducer;
