import { combineReducers } from 'redux';
import auth from './auth';
import alert from './alert';
import dashboard from './dashboard'

export default combineReducers({
  auth,
  alert,
  dashboard
});
