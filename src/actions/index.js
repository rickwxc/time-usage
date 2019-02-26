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

export function loadActivitySucceeded(activities) { 
  return { 
    type: 'LOAD_ACTIVITY_SUCCESS',
    payload: activities
  }; 
}

export function saveActivitySucceeded(activity) { 
  return { 
    type: 'SAVE_NEW_ACTIVITY_SUCCESS',
    payload: activity
  }; 
}

export function saveNewActivity(name, key) { 
  return dispatch => {
    return api.createActivity({ name, key }).then(resp => { 
      dispatch(saveActivitySucceeded(resp.data)); 
    }); 
  };
}
