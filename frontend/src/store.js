import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { applyMiddleware, combineReducers } from 'redux';
import { UserLoginReducer , UserRegisterReducer } from './reducers/UserReducers';
import { ProductListReducer } from "./reducers/ProductReducer";

const userInfoFromLocalStorage = localStorage.getItem('userInfo') 
? JSON.parse(localStorage.getItem('userInfo')) 
: null;

const initialState = {
    // productList : {items : []},
    userLogin : { userInfo : userInfoFromLocalStorage },
}
const middleware = [thunk];


const Store = configureStore({
    reducer: combineReducers({
        productList: ProductListReducer,
        userLogin: UserLoginReducer,
        userRegister: UserRegisterReducer,
    }),
    middleware: [thunk],
    devTools: composeWithDevTools(applyMiddleware(...middleware)),
    preloadedState: initialState // initial state
});

export default Store;