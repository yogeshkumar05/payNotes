import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import fetchReducer from './fetchReducer';
import updateReducer from './updateReducer';

const rootReducer = combineReducers({
    loginReducer,
    fetchReducer,
    updateReducer
  });
  
  export default rootReducer;