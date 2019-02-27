const initialState = {
  activities: {},
  skills: {}
};

export default function resources(state = initialState, action) { 

  if (action.type.match(/RESOURCE_LOAD_SUCCESS/i)
      && action.type === (action.payload.resource.toUpperCase() + '_RESOURCE_LOAD_SUCCESS')) { 
    return {
      ...state,
      [action.payload.resource]: action.payload.list
    }
  }

  if (action.type.match(/DELETE_SUCCEED/i) && action.type === (action.payload.resource.toUpperCase() + '_DELETE_SUCCEED')) { 
    let resource = action.payload.resource
    const newlist = {...state[resource]}
    delete newlist[action.payload.key]
    return {
      ...state,
      [resource]: newlist
    }
  }

  if (action.type.match(/NEW_SUCCEED/i) && action.type === (action.payload.resource.toUpperCase() + '_NEW_SUCCEED')) { 
    let resource = action.payload.resource

    return {
      ...state,
      [resource]: {
        ...state[resource],
        ...action.payload.entity
      }
    }
  }

  if (action.type.match(/UPDATE_SUCCEED/i) && action.type === (action.payload.resource.toUpperCase() + '_UPDATE_SUCCEED')) { 
    let resource = action.payload.resource
    let kv = { [action.payload.key]: action.payload.entity }
    return {
      ...state,
      [resource]: {
        ...state[resource],
        ...kv
      }
    }
  }

  return state;
}
