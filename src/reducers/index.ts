import {combineReducers} from 'redux';
import auth_reducer from './auth_reducer';

const rootReducer = combineReducers({
  auth_reducer,
  // Add other reducers here
});

export default rootReducer;
