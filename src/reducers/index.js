const initDays = [
  { date: '2019-01-03', type: 'working' },
  { date: '2019-01-02', type: 'working' },
  { date: '2019-01-01', type: 'holiday' },
]

const activities = [

]

const initialState = {
  days: initDays,
  isLoading: false,
  errors: [],
};

export default function days(state = initialState, action) { 
  if (action.type === 'FETCH_DAYS_STARTED') { 
    return { ...state, isLoading: true } 
  }

  return state;
}
