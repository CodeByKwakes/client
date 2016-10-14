import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const ClientListRow = ({client}) => {
  return (
    <tr>
      <td><a href={client.watchHref} target="_blank">Watch</a></td>
      <td><Link to={'/client/' + client.id}>{client.clientName}</Link></td>
    </tr>
  );
};

ClientListRow.propTypes = {
  client: PropTypes.object.isRequired
};

export default ClientListRow;
