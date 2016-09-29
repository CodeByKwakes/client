/*Container Component*/
import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {

  /*======Construtor====================*/
  constructor(props, context){
    super(props, context);

    /*Initialised state*/
    this.state = {
      course: { title: "" } // can not use null - must use empty string ("")
    };

    /*best place to call our bind functions*/
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

/*======End Construtor====================*/

/*=========Child Functions=============================*/

/*theses are called by render*/

onTitleChange(event){
  const course = this.state.course;
  course.title = event.target.value;
  this.setState({course: course});
}

onClickSave(){
  // alert(`Saving ${this.state.course.title}`);

  // use below is mapDispatchToProps is not use in connect()
  /*this.props.dispatch(courseActions.createCourse(this.state.course));*/
/*  this.props.createCourse(this.state.course); // without bindActionCreators*/
  this.props.actions.createCourse(this.state.course);
}

courseRow(course, index){
  return <div key={index}>{course.title}</div>;
}
/*==============End Child Functions==============================*/
    render() {
      // debugger;
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add Course</h2>
                <input
                type="text"
                onChange={this.onTitleChange} // can also do this instead of in construtor - this.onTitleChange.bind(this) but not great on prefromance
                value={this.state.course.title} />

                <input
                type="submit"
                value="Save"
                onClick={this.onClickSave} />
            </div>
        );
    }
}

/*===============PropTypes====================*/
// Props validation
CoursesPage.propTypes = {
  /*dispatch: PropTypes.func.isRequired,*/ // if not using mapDispatchToProps in connect()
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
 /* createCourse: PropTypes.func.isRequired // if using mapDispatchToProps in connect() and not using without bindActionCreators*/
};
 /*======End PropTypes====================*/

 /*==============Redux Connect and relatived functions===========================*/
function mapStateToProps(state, ownProps) {
  // debugger;
  return {
    courses: state.courses  // state.course is name of propery in rootReducer from reducers/index.js
  };
}

function mapDispatchToProps(dispatch) {
  return {
    /*createCourse: course => dispatch(courseActions.createCourse(course)) // without bindActionCreators*/
    actions: bindActionCreators(courseActions, dispatch) // with bindActionCreators
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);

// Can also be written like below as well
/*const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connectedStateAndProps(CoursesPage)*/
