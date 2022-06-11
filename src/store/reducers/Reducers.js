import {FETCH_USERS, REFRESH_USERS, SEARCH_USERS} from '../actions/Types';

const initialState = {
  data: [],
  error: null,
  page: 1,
  message: null,
  filterUser: [],
};

function paginationReducer  (state = initialState, action)  {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        data: [...state.data, ...action.payload]
      };
    case REFRESH_USERS:
      return {
        data: action.payload,
      };
      case SEARCH_USERS:
        const {value} = action;
        const filterUser = state.data.filter((val) => val.includes(value));
        return {...state, value, filterUser};
    default:
      return state;
  }  
};

export default paginationReducer;
