import React from "react";
import Cart from "./Cart";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";
import Navbar from "./Navbar";

const Product = () => {
  const dispatch = useDispatch()
  const products = [
    { id: 1, name: "Cadbery", price: 100 },
    { id: 2, name: "Biskit", price: 30 },
    { id: 3, name: "Candle", price: 10 },
    { id: 4, name: "Wine", price: 980 },
  ];
  return (
    <>
    <div className="container">
      <h2 className="my-5">Products</h2>
      <Cart />
      <div className="row mt-3">
        {products.map((product, key) => (
          <div className="col-md-3 col-4" key={key}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: {product.price}</p>
                <button onClick={e => dispatch(addItem(product))} className="btn btn-primary">Add To Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Product;
