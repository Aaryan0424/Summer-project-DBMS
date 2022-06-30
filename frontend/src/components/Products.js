import { React, useEffect } from "react";
import "../styles/Products.css";
// import Items from "../../../Backend/Items";
import {useDispatch , useSelector } from "react-redux";
import { listItems } from "../actions/ProductActions";
import { useNavigate } from "react-router-dom";


const Products = () => {


  const dispatch = useDispatch();

  
  const productList = useSelector( (state) => state.productList);
  const {loading , error , items } = productList;
  
  useEffect( () => {
    dispatch(listItems());
  },[dispatch]);

  const navigate = useNavigate();
  const pathHandler = (_id) => {
    const path = `/Dashboard/?id=${_id}`; 
    navigate(path);
  }

  const pets = [];
  return (
    <section style={{ backgroundColor: "#eee" }}>
      <div class="text-center container py-5">
        <h4 class="mt-4 mb-5">
          <strong>Bestsellers</strong>
        </h4>
        {loading ? (
          <h2>Loading.....</h2>
        ) 
        : error ? (
          <h3>{error}</h3>
        )
        :
        (
        <div class="row">
          {items && items.map((item) => (
            <div className = "col-lg-4 col-md-12 mb-4">
              <div class="card">
                <div
                 id="img-container"
                 className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src={item.itemImg}
                    classNameass="w-100"
                  />
                </div>
                  <a href="#!">
                    <div className="mask">
                      <div className="d-flex justify-content-start align-items-end h-100">
                        <h5>
                          <span className="badge bg-primary ms-2">{item.itemNo}</span>
                        </h5>
                      </div>
                    </div>
                    <div className="hover-overlay">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </div>
                  </a>
                <div className="card-body">
                  <a href="" className="text-reset">
                    <h5 className="card-title mb-3">{item.itemName}</h5>
                  </a>
                  <a href="" className="text-reset">
                    <p>{item.description}</p>
                  </a>
                  <h6 className="mb-3">{item.price}</h6>
                    <div class="d-flex flex-row">
                        <button type="button" style = {{borderRadius : "10px" , fontSize : "0.8rem" }} class="btn btn-primary flex-fill me-2 btn-sm" data-mdb-ripple-color="dark"
                        onClick = {() => pathHandler(item._id)}>
                        Add to Cart
                        </button>
                        <button type="button" style = {{borderRadius : "10px"}} class="btn btn-danger flex-fill ms-1">Learn</button>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        )}
      </div>
    </section>
  );
};

export default Products;

