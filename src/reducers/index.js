const initDays = [
  { date: '2019-01-03', type: 'working' },
  { date: '2019-01-02', type: 'working' },
  { date: '2019-01-01', type: 'holiday' },
]


const initialState = {
  days: initDays,
  activities: [],
  isLoading: false,
  errors: [],
};

export default function days(state = initialState, action) { 
  if (action.type === 'FETCH_DAYS_STARTED') { 
    return { ...state, isLoading: true } 
  }

  if (action.type === 'FETCH_DAYS_STARTED') { 
    return { ...state, isLoading: true } 
  }

  if (action.type === 'LOAD_ACTIVITY_SUCCESS') { 
    return {
      ...state,
      activities: action.payload,
      isLoading: false 
    }
  }

  if (action.type === 'SAVE_NEW_ACTIVITY_SUCCESS') { 
    return {
      days: state.days.concat(action.payload) 
    };
  }


  return state;
}
