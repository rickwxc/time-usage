const initDays = [
  { date: '2019-01-03' },
  { date: '2019-01-02' },
  { date: '2019-01-01' },
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
