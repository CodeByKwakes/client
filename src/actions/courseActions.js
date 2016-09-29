/*This file hold our Course related Action Creators*/
import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

/*export function createCourse(course){
  return { type: types.CREATE_COURSE, course};
}*/
export function loadCoursesSussess(courses){
  return { type: types.LOAD_COURSES_SUCCESS, courses};
}

/*Thunk*/
export function loadCourses(){
  return function(dispatch){
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSussess(courses));
    }).catch(error => {
      throw(error);
    });
  };
}
