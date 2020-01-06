import authReducer from "./authReducer";
import JobPostReducer from "./JobPostReducer";
import cartReducer from "./cartReducer";
import StatesListReducer from "./stateReducer";
import ServiceListReducer from "./serviceReducer";
import CounterReducer from "./counterReducer";
import BidsReducer from "./bidsReducer";
import EnrollmentReducer from "./enrollmentReducer";
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
  bidsReducer: BidsReducer,
  cartReducer: cartReducer,
  contractorProfile: contractorProfileReducer,
  counterReducer: CounterReducer,
  deleteJob: deleteJobReducer,
  enrollmentReducer: EnrollmentReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  messageReducer: MessageReducer,
  notificationsReducer: NotificationReducer,
  projectReducer: JobPostReducer,
  registrationReducer: RegistrationReducer,
  serviceList: ServiceListReducer,
  statesList: StatesListReducer,
  submitBidReducer: SubmitBidReducer,
  subscriptionReducer: SubscriptionReducer
  //userData: ProfileReducer
});

export default rootReducer;
