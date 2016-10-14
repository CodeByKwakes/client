import delay from './delay';

const clients = [
  {
    id: 'cory-house',
    clientName: 'Cory',
  },
  {
    id: 'scott-allen',
    clientName: 'Scott',
  },
  {
    id: 'dan-wahlin',
    clientName: 'Dan',
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (client) => {
  return client.clientName.toLowerCase() + '-' + 'id';
};

class ClientApi {
  static getAllClients() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], clients));
      }, delay);
    });
  }

  static saveClient(client) {
	client = Object.assign({}, client); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minClientNameLength = 3;
        if (client.clientName.length < minClientNameLength) {
          reject(`Client Name must be at least ${minClientNameLength} characters.`);
        }

        if (client.id) {
          const existingClientIndex = clients.findIndex(a => a.id == client.id);
          clients.splice(existingClientIndex, 1, client);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new clients in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          client.id = generateId(client);
          clients.push(client);
        }

        resolve(client);
      }, delay);
    });
  }

  static deleteClient(clientId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfClientToDelete = clients.findIndex(client => {
          client.clientId == clientId;
        });
        clients.splice(indexOfClientToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default ClientApi;
