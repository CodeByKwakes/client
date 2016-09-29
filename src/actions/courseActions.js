/*This file hold our Course related Action Creators*/
import * as types from './actionTypes';

export function createCourse(course){
  // debugger;
  return { type: types.CREATE_COURSE, course};
}
