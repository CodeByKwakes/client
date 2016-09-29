/*Container Component*/
import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursesPage extends React.Component {

  /*======Construtor====================*/
  constructor(props, context){
    super(props, context);

  }

/*======End Construtor====================*/

/*=========Child Functions=============================*/

courseRow(course, index){
  return <div key={index}>{course.title}</div>;
}

/*==============End Child Functions==============================*/
    render() {
      const { courses } = this.props;
        return (
            <div>
                <h1>Courses</h1>
                <CourseList courses={courses} />
            </div>
        );
    }
}

/*===============PropTypes====================*/

CoursesPage.propTypes = {

  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};
 /*======End PropTypes====================*/

 /*==============Redux Connect and relatived functions===========================*/
function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
