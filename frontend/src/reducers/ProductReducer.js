
import{
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
}
from "../constants/Productconstants";
import { createReducer } from "@reduxjs/toolkit";

const InitalState = {Items : []};
export const ProductListReducer = createReducer( InitalState , builder => {
    builder
    .addCase(PRODUCT_LIST_REQUEST , (state, action) => {
        return {loading: true , items : [] };
    })
    .addCase(PRODUCT_LIST_SUCCESS , (state, action) => {
        return { loading: false , items: action.payload };
    })
    .addCase(PRODUCT_LIST_FAIL , (state, action) => {
        return { loading: false , error : action.payload};
    })
    .addDefaultCase((state, action) => {
        return {state};
    })
});
