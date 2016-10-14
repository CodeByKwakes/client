import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const ClientListRow = ({client}) => {
  return (
    <tr>
      <td><Link to={'/client/' + client.id}>{client.clientName}</Link></td>
    </tr>
  );
};

ClientListRow.propTypes = {
  client: PropTypes.object.isRequired
};

export default ClientListRow;
