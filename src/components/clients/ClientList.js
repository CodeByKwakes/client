import React, {PropTypes} from 'react';
import ClientListRow from './ClientListRow';

const ClientList = ({clients}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Client Name</th>
      </tr>
      </thead>
      <tbody>
      {clients.map(client =>
        <ClientListRow key={client.id} client={client}/>
      )}
      </tbody>
    </table>
  );
};

ClientList.propTypes = {
  clients: PropTypes.array.isRequired
};

export default ClientList;
