import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class $ComponentName extends React.Component {
  constructor(props, context){
    super(props, context);
  }

    render() {
        return (

        );
    }
}

$ComponentName.propTypes = {
  //myProp: PropTypes.string.isRequired // eg. courses: PropTypes.array.isRequired, actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    state: state // eg. courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(/*actions eg. courseActions*/, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)($ComponentName);
