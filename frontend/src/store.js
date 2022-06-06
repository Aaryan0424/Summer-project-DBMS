import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { applyMiddleware, combineReducers } from 'redux';
import { UserLoginReducer } from './reducers/UserReducers';

const userInfoFromLocalStorage = localStorage.getItem('userInfo') 
? JSON.parse(localStorage.getItem('userInfo')) 
: null;

const initialState = {
    userLogin : { userInfo : userInfoFromLocalStorage }
}
const middleware = [thunk];


const Store = configureStore({
    reducer: combineReducers({
        userLogin: UserLoginReducer,
    }),
    middleware: [thunk],
    devTools: composeWithDevTools(applyMiddleware(...middleware)),
    preloadedState: initialState // initial state
});

export default Store;