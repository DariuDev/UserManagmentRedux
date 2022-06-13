import {FETCH_USERS, REFRESH_USERS, SEARCH_USERS} from '../actions/Types';

const initialState = {
  data: [],
  error: null,
  page: 1,
  message: null,
  filterUser: [],
};

function userReducer  (state = initialState, action)  {
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
    default:
      return state;
  }  
};

export default userReducer;
