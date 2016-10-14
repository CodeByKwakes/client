import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as clientActions from '../../actions/clientActions';
import ClientForm from './ClientForm';
// import {authorsFormattedForDropdown} from '../../utils/selectors';
import toastr from 'toastr';

export class ManageClientPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      client: Object.assign({}, props.client),
      errors: {},
      saving: false
    };

    /*bind*/
    this.updateClientState = this.updateClientState.bind(this);
    this.saveClient = this.saveClient.bind(this);
  }

  /*life cycle method*/
  componentWillReceiveProps(nextProps) {
    if (this.props.client.id != nextProps.client.id) {
      // Necessary to populate form when existing client is loaded directly.
      this.setState({ client: Object.assign({}, nextProps.client) });
    }
  }

  /*change handler*/
  updateClientState(event) {
    const field = event.target.name;
    let client = this.state.client;
    client[field] = event.target.value;
    return this.setState({ client: client });
  }

  clientFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.client.clientName.length < 3) {
      errors.clientName = 'Client Name must be at least 3 characters.';
      formIsValid = false;
    }

    this.setState({errors: errors});
    return formIsValid;
  }

  saveClient(event) {
    event.preventDefault();

    if (!this.clientFormIsValid()) {
      return;
    }

    this.setState({ saving: true });
    this.props.actions.saveClient(this.state.client)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({ saving: false });
      });
  }

  redirect() {
    this.setState({ saving: false });
    toastr.success('Client saved');
    this.context.router.push('/clients');
  }

  render() {
    return (
      <ClientForm
        /*allAuthors={this.props.authors}*/
        /* allAuthors={[]}*/
        onChange={this.updateClientState}
        onSave={this.saveClient}
        client={this.state.client}
        errors={this.state.errors}
        saving={this.state.saving}
        />
    );
  }
}

ManageClientPage.propTypes = {
  client: PropTypes.object.isRequired,
  // authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
ManageClientPage.contextTypes = {
  router: PropTypes.object.isRequired
};

function getClientById(clients, id) {
  // debugger;

  const client = clients.filter(client => client.id == id);
  if (client) return client[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const clientId = ownProps.params.id;
  let client = { id: '', clientName: '' };

  if (clientId && state.clients.length > 0) {
    client = getClientById(state.clients, clientId);
  }

  return {
    client: client,
    // authors: authorsFormattedForDropdown(state.authors)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(clientActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageClientPage);
