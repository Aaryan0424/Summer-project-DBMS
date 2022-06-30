
import { React, useEffect, useState } from 'react';
import Navbar from './Navbar';
import "../styles/Dashboard.css";
import { useDispatch } from 'react-redux';
import { addToCart } from "../actions/CartActions"
const Dashboard = ({match,location,history}) => {

    const queryParams = new URLSearchParams(window.location.search);
    const productId = queryParams.get('id');
    
    const dispatch = useDispatch()

    useEffect(() => {
        if(productId){
            console.log(productId);
            dispatch(addToCart(productId))
        }
    },[dispatch,productId])

    const [totPrice , settotPrice] = useState(0);

    const orders = [
        {
            itemName: "Iphone",
            price : "400",
            qty : "10",
            itemImg : "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/belt.webp",
        },
        {
            itemName: "Iphone",
            price : "400",
            qty : "10",
            itemImg : "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/belt.webp",
        }
    ];
    
    const num = orders.length;
    return (
        <div>
            <Navbar />
            <div className='shifter'></div>
            <div className='dashboard-container'>
                <div className = 'row' style={{ marginRight : "55px" , marginLeft : "55px"}} >
                    <div className='col-md-8'>
                        <h1>Shopping Cart.</h1>
                        {orders[0] ? null : <div role="alert" class="fade alert-custom alert alert-info show" style={{display: "block"}}>
                            Your Cart is empty. 
                            <a href="/">
                                Go Back.
                            </a> 
                        </div>}
                        {orders && orders.map((product) => (<div className='list-group list-group-flush' style={{marginBottom : "10px"}}>
                            <div className='list-group-item' id='item-holder'>
                                <div className='row' style={{display : "flex" , alignItems : "center" }}>
                                    <div className='col-md-2'>
                                        <img src={product.itemImg} alt='product' className='product-image img-fluid rounded' />
                                    </div>
                                    <div class="col-md-4" id='item-checker'>
                                        <a href="/product/615963e225a7193804bfd654" style={{padding : "10px"}}>{product.itemName}</a>
                                    </div>
                                    <div class="d-none d-md-flex col-md-3" style= {{alignItems: "center" , justifyContent: "space-evenly"}}>
                                        {product.price}
                                        <div>
                                            <i class="fas fa-times" style= {{fontSize: "0.7em"}}></i>
                                            {product.qty}
                                        </div>
                                    </div>
                                    <div class="d-none d-md-flex col-md-3" style= {{alignItems: "center" , justifyContent: "space-between"}}>
                                    <div aria-label="Addtocart" role="group" class="btn-group">
                                        <button type="button" class="btn btn-primary" style = {{outline: "none" , borderRight: "1px solid white"}}>
                                            <i class="fas fa-plus"></i>
                                        </button>
                                        <button type="button" class="btn btn-primary" style = {{outline: "none" , borderLeft: "1px solid white"}}>
                                            <i class="fas fa-minus"></i>
                                        </button>
                                    </div>
                                    <button type="button" class="btn btn-primary">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                    </div>
                                    <div class="d-flex d-md-none mt-2 col" style= {{alignItems: "center" , justifyContent: "space-between"}}>
                                        <div class="d-flex" style = {{fontSize: "1.2em" , width: "50%"}}>
                                            {product.price}
                                        <div class="ms-1">
                                            <i class="fas fa-times" style = {{fontSize: "0.7em"}}></i>
                                            {product.qty}
                                            </div>
                                            </div>
                                            <div class="d-flex" style= {{alignItems: "center" , justifyContent: "space-between" , width : "50%"}}>
                                                <button type="button" class="btn btn-primary">
                                                    <i class="fas fa-trash"></i>
                                                    </button><button type="button" class="btn btn-primary" style = {{outline: "none" , borderRight: "1px solid white"}}>
                                                        <i class="fas fa-plus"></i>
                                                        </button>
                                                        <button type="button" class="btn btn-primary" style = {{outline: "none" , borderLeft: "1px solid white"}}>
                                                            <i class="fas fa-minus"></i>
                                                        </button>
                                            </div>
                                        </div>
                                </div>
                            </div>                                
                        </div>))}
                    </div>
                    <div class="mt-3 col-md-4">
                        <div class="list-group">
                            <div variant="flush" class="card">
                                <div class="list-group-item">
                                    <h2 class="text-center">Subtotal ({num}) Items</h2>
                                    <strong>45</strong></div>
                                <div class="list-group-item">
                                    <div class="d-grid">
                                        <button type="button" class="btn btn-primary btn-lg">
                                            Proceed to checkout
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;