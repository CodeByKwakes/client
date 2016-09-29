import { combineReducers } from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
  /*courses: courses*/ // can be written like this as well as assigning courses to courses
  courses // ES6 Shorthand property name
});

export default rootReducer;
