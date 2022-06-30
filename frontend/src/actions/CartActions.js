import axios from "axios"
import {CART_ADD_ITEM} from "../constants/Cartconstants"

export const addToCart = (id) => async (dispatch , getState) => {
    const {data} = await axios.get(`http://localhost:5000/products/${id}`)

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data.itemNo,
            name : data.itemName,
            image : data.itemImg,
            price : data.price,
        }
    })

    localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems))
}