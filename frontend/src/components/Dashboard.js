
import { React } from 'react';
import Navbar from './Navbar';
import "../styles/Dashboard.css";

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <div className='shifter'></div>
            <div className='dashboard-container'>
                <div className = 'row' style={{ marginRight : "55px" , marginLeft : "55px"}} >
                    <div className='col-md-8'>
                        <h1>Shopping Cart.</h1>
                        <div role="alert" class="fade alert-custom alert alert-info show" style={{display: "block"}}>
                            Your Cart is empty. 
                            <a href="/">
                                Go Back.
                            </a> 
                        </div>
                        <div className='list-group list-group-flush' style={{marginBottom : "10px"}}>
                            <div className='list-group-item' id='item-holder'>
                                <div className='row' style={{display : "flex" , alignItems : "center" }}>
                                    <div className='col-md-2'>
                                        <img src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/belt.webp' alt='product' className='product-image img-fluid rounded' />
                                    </div>
                                    <div class="col-md-4" id='item-checker'>
                                        <a href="/product/615963e225a7193804bfd654" style={{padding : "10px"}}>Airpods Wireless Bluetooth Headphones</a>
                                    </div>
                                    <div class="d-none d-md-flex col-md-3" style= {{alignItems: "center" , justifyContent: "space-evenly"}}>
                                        ₹14,999.00
                                        <div>
                                            <i class="fas fa-times" style= {{fontSize: "0.7em"}}></i>
                                            2
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
                                            ₹14,999.00
                                        <div class="ms-1">
                                            <i class="fas fa-times" style = {{fontSize: "0.7em"}}></i>
                                             2
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
                        </div>
                        <div className='list-group list-group-flush' style={{marginBottom : "10px"}}>
                            <div className='list-group-item'>
                                <div className='row' style={{display : "flex" , alignItems : "center" }}>
                                    <div className='col-md-2'>
                                        <img src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt='product' className='product-image img-fluid rounded' />
                                    </div>
                                    <div class="col-md-4">
                                        <a href="/product/615963e225a7193804bfd654">Airpods Wireless Bluetooth Headphones</a>
                                    </div>
                                    <div class="d-none d-md-flex col-md-3" style= {{alignItems: "center" , justifyContent: "space-evenly"}}>
                                        ₹14,999.00
                                        <div>
                                            <i class="fas fa-times" style= {{fontSize: "0.7em"}}></i>
                                            2
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
                                            ₹14,999.00
                                        <div class="ms-1">
                                            <i class="fas fa-times" style = {{fontSize: "0.7em"}}></i>
                                             2
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
                        </div>
                    </div>
                    <div class="mt-3 col-md-4">
                        <div class="list-group">
                            <div variant="flush" class="card">
                                <div class="list-group-item">
                                    <h2 class="text-center">Subtotal (2) Items</h2>
                                    <strong>₹64,989.00</strong></div>
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