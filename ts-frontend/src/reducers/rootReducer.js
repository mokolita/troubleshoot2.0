import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import locationsReducer from './locationsReducer'

const rootReducer = combineReducers({
    user: usersReducer,
    locations: locationsReducer
})

export default rootReducer
