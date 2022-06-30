
import {CART_ADD_ITEM , CART_REMOVE_ITEM} from "../constants/Cartconstants";

import { createReducer } from "@reduxjs/toolkit";

const state = {cartItems : []};
export const CartReducer = createReducer( state , builder => {
    builder
    .addCase(CART_ADD_ITEM , (state, action) => {
        const item = action.payload
        const existItem = state.cartItems.find(x => x.product === item.product)
        if(existItem) {
            return{
                ...state,
                cartItems: state.cartItems.map((x) => x.product === existItem.product ? item : x),
            };
        } else {
            return{
                ...state,
                cartItems: [...state.cartItems , item],
            };
        }
    })
    .addDefaultCase((state, action) => {
        return {...state};
    })
});