import * as api from '../api';

export function loadEntities(resource) {
  return dispatch => {
    return api.loadResource(resource).then(resp => { 
      return dispatch(loadResourceSucceed(resource, resp.data)); 
    }); 
  };
}

export function loadResourceSucceed(resource, list) { 
  return { 
    type: resource.toUpperCase() + '_RESOURCE_LOAD_SUCCESS',
    payload: {
      resource:resource, 
      list: list
    }
  }; 
}

export function updateEntitySucceed(resource, key, entity) { 
  return {
    type: resource.toUpperCase() + '_UPDATE_SUCCEED',
    payload: {
      resource: resource, 
      entity: entity, 
      key: key
    }
  }; 
}


export function deleteEntitySucceed(resource, key) { 
  return { 
    type: resource.toUpperCase() + '_DELETE_SUCCEED',
    payload: {
      resource:resource, 
      key: key
    }
  }; 
}

export function createEntitySucceed(resource, entity) { 
  return { 
    type: resource.toUpperCase() + '_NEW_SUCCEED',
    payload: {
      resource:resource, 
      entity: entity
    }
  }; 
}

export function updateEntity(resource, uuid, params) { 
  return dispatch => {
    return api.updateEntity(resource, uuid, params)
    .then(resp => {
      return dispatch(updateEntitySucceed(resp.resource, resp.key, resp.entity))
    })
  }
}

export function deleteEntity(resource, key) { 
  return dispatch => {
    return api.deleteEntity(resource, key)
    .then(deletedKey => {
      return dispatch(deleteEntitySucceed(resource, deletedKey))
    })
  }
}

export function newEntity(resource, params) { 
  return dispatch => {
    return api.newEntity(resource, params)
    .then(newObj => {
      return dispatch(createEntitySucceed(resource, newObj))
    })
  }
}
