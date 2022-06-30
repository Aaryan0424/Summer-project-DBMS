import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { applyMiddleware, combineReducers } from 'redux';
import { UserLoginReducer , UserRegisterReducer } from './reducers/UserReducers';
import { ProductListReducer } from "./reducers/ProductReducer";
import { CartReducer } from './reducers/CartReducer';

const userInfoFromLocalStorage = localStorage.getItem('userInfo') 
? JSON.parse(localStorage.getItem('userInfo')) 
: null;


const cartItemsfromStorage = localStorage.getItem("cartItems")  ? JSON.parse
(localStorage.getItem("cartItems")) : []

const initialState = {
    // productList : {items : []},
    cart: { cartItems : cartItemsfromStorage},
    userLogin : { userInfo : userInfoFromLocalStorage },
}
const middleware = [thunk];


const Store = configureStore({
    reducer: combineReducers({
        productList: ProductListReducer,
        userLogin: UserLoginReducer,
        userRegister: UserRegisterReducer,
        cart: CartReducer,
    }),
    middleware: [thunk],
    devTools: composeWithDevTools(applyMiddleware(...middleware)),
    preloadedState: initialState // initial state
});

export default Store;