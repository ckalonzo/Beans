import authReducer from './authReducer'
import JobPostReducer from './JobPostReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    project: JobPostReducer
})

export default rootReducer