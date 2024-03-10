import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts, fetchProducts } from "../redux/actions/productAction";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/actions/cartAction";

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  /** Synchronous way without thunk  */

  // const fetchProducts = async () => {
  //   const response = await axios
  //     .get("https://fakestoreapi.com/products")
  //     .catch((err) => {
  //       console.log("Err: ", err);
  //     });

  //   dispatch(setProducts(response.data));
  // };
  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  /** Thunk way  */
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      <div className="container">
        <h1 className="mb-3">ProductListing</h1>
        <div className="row">
          {products.map((product, i) => (
            <div key={product.id} className="col-md-3 mb-2 h-25">
              <div className="card">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    className="card-img-top w-50"
                    alt={product.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <h5 className="card-text text-success">
                      <b>{product.category}</b>
                    </h5>
                    <h5 className="card-text text-primary">
                      Rs. {product.price}
                    </h5>
                  </div>
                  <div></div>
                </Link>
                <div className="card-footer">
                  <button
                    className="btn btn-primary"
                    onClick={() => dispatch(addToCart(product))}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
