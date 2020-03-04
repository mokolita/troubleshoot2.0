import { combineReducers } from 'redux'
import { locationsReducer as locations} from './locationsReducer'
import { usersReducer as users} from './usersReducer'

 const rootReducer = combineReducers({
    locations,
    users
})

export default rootReducer

