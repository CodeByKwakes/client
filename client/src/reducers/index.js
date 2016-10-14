import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import clients from './clientReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  clients,
  ajaxCallsInProgress
});

export default rootReducer;
