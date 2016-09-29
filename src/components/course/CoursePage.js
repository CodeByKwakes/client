/*Container Component*/
import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';

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
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
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
