import { FETCH_USERS, REFRESH_USERS, SEARCH_USERS } from './Types';

export const fetchUser = (page) => {
  return async (dispatch) => {
    const url = `https://randomuser.me/api/?page=${page}&results=20`;
    const response = await fetch(url, {
      method: 'GET',
    });
    const resData = await response.json();
    if(resData){
      dispatch({
      type: FETCH_USERS,
      payload: resData.results,
    });
  }else {
    console.log('Unable to fetch!!');
  }};
};
export const fetchRefreshUser = () => {
  return async (dispatch) => {
    const url = 'https://randomuser.me/api/?page=1&results=20';
    const response = await fetch(url, {
      method: 'GET',
    });
    const resData = await response.json();

    dispatch({
      type: REFRESH_USERS,
      payload: resData.results,
    });
  };
};
// export const searchUser = (value) => {
//  dispatch({
//   types: SEARCH_USERS,
//    value,
//  })
// }

