import authReducer from './authReducer'
import JobPostReducer from './JobPostReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
const rootReducer = combineReducers({
    auth: authReducer,
    project: JobPostReducer,
    firestore: firestoreReducer,
})

export default rootReducer