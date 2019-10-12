import authReducer from "./authReducer";
import JobPostReducer from "./JobPostReducer";
import cartReducer from "./cartReducer";
import CounterReducer from "./counterReducer";
import ProfileReducer from "./profileReducer"
import SubmitBidReducer from "./SubmitBidReducer";
import deleteJobReducer from "./deleteJobReducer";
import monthlySubscriptionReducer from "./monthlyMembershipReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
const rootReducer = combineReducers({
  auth: authReducer,
  project: JobPostReducer,
  submitBid: SubmitBidReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  contractorProfile: ProfileReducer,
  counter: CounterReducer,
  items: cartReducer,
  cart: cartReducer,
  subscription: monthlySubscriptionReducer,
  contractorProfile: ProfileReducer,
  deleteJob: deleteJobReducer
});

export default rootReducer;
