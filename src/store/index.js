import {createStore, applyMiddleware, combineReducers} from 'redux';
 import thunk from 'redux-thunk';
 import paginationReducer from '../store/reducers/Reducers';


 export const rootReducer = combineReducers({paginationReducer});

 export const Store = createStore(rootReducer, applyMiddleware(thunk));