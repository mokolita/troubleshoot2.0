import { combineReducers } from 'redux';

import { locationsReducer as locations } from './locationsReducer'
import { authentication } from './authenticationReducer';
import { registration } from './registrationReducer';
import { users } from './usersReducer';
import { alert } from './alertReducer';

export const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  locations
});


