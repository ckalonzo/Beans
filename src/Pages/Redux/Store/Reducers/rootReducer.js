import authReducer from "./authReducer";
import JobPostReducer from "./JobPostReducer";
import cartReducer from "./cartReducer";
import CounterReducer from "./counterReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
const rootReducer = combineReducers({
  auth: authReducer,
  project: JobPostReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  items: cartReducer,
  cart: cartReducer
});

export default rootReducer;
