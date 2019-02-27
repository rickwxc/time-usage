import * as api from '../api';

export default function fetch_days_started() { 
  return { 
    type: 'FETCH_DAYS_STARTED' 
  }; 
}

export function loadActivities() {
  return dispatch => {
    //TODO show loading
    return api.loadActivities().then(resp => { 
      dispatch(loadActivitySucceeded(resp.data)); 
    }); 
  };
}


export function showError(message) { 
  return { 
    type: 'GET_ERROR',
    payload: message
  }; 
}

export function loadActivitySucceeded(activities) { 
  return { 
    type: 'LOAD_ACTIVITY_SUCCESS',
    payload: activities
  }; 
}

export function deleteActivitySucceeded(activityKey) { 
  return { 
    type: 'DELETE_ACTIVITY_SUCCESS',
    payload: activityKey
  }; 
}

export function saveActivitySucceeded(activity) { 
  return { 
    type: 'SAVE_NEW_ACTIVITY_SUCCESS',
    payload: activity
  }; 
}

export function updateEntity(resource, uuid, params) { 
  return dispatch => {
    return api.updateEntity(resource, uuid, params)
  }
}

export function deleteEntity(resource, uuid) { 
  return dispatch => {
    return api.deleteEntity(resource, uuid)
  }
}

export function deleteActivity(key) { 
  return dispatch => {
    return api.deleteEntity('activities', key)
    .then(deletedKey => {
      dispatch(deleteActivitySucceeded(deletedKey))
    })
  }
}

export function newActivity(params) { 
  return dispatch => {
    return api.newEntity('activities', params)
    .then(newActivityObj => {
      dispatch(saveActivitySucceeded(newActivityObj))
    })
  }
}

export function newEntity(resource, params) { 
  return dispatch => {
    return api.newEntity(resource, params)
  }
}
