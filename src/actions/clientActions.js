import * as types from './actionTypes';
import ClientApi from '../api/mockClientApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadClientsSussess(clients){
  return { type: types.LOAD_CLIENTS_SUCCESS, clients};
}

export function createClientSuccess(client) {
  return {type: types.CREATE_CLIENT_SUCCESS, client};
}

export function updateClientSuccess(client) {
  return {type: types.UPDATE_CLIENT_SUCCESS, client};
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk!

    NOTE: This is solely for demonstration purposes. In a real application,
    you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
    reducer take care of this logic.  */

export function loadClients(){
  return function(dispatch){
    dispatch(beginAjaxCall());
    return ClientApi.getAllClients().then(clients => {
      dispatch(loadClientsSussess(clients));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveClient(client) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return ClientApi.saveClient(client).then(client => {
      client.id ? dispatch(updateClientSuccess(client)) : dispatch(createClientSuccess(client));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}