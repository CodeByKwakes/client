/*Container Component*/
import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as clientActions from '../../actions/clientActions';
import ClientList from './ClientList';
import {browserHistory} from 'react-router';

class ClientPage extends React.Component {

  /*======Construtor====================*/
  constructor(props, context){
    super(props, context);
    this.redirectToAddClientPage = this.redirectToAddClientPage.bind(this);

  }

/*======End Construtor====================*/

/*=========Child Functions=============================*/

clientRow(client, index){
  return <div key={index}>{client.clientName}</div>;
}

redirectToAddClientPage(){
    browserHistory.push('/client');
}

/*==============End Child Functions==============================*/
    render() {
      const { clients } = this.props;
        return (
            <div>
                <h1>Clients</h1>
                <input type="submit"
                        value="Add Client"
                        className="btn btn-primary"
                        onClick={this.redirectToAddClientPage}/>
                <ClientList clients={clients} />
            </div>
        );
    }
}

/*===============PropTypes====================*/

ClientPage.propTypes = {
  clients: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};
 /*======End PropTypes====================*/

 /*==============Redux Connect and relatived functions===========================*/
function mapStateToProps(state, ownProps) {
  return {
    clients: state.clients
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(clientActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientPage);
