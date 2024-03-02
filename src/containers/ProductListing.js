import axios from "axios";
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from '../redux/actions/productAction';
import { Link } from "react-router-dom";

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products)
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
     
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
        <div className='container'>
        <h1 className='mb-3'>ProductListing</h1>
          <div className='row'>
            {products.map((product,i) => (
              <div key={product.id} className='col-md-4 mb-2 h-25'>
                  <Link to={`/product/${product.id}`}>
                  <div className="card">
                    <img src={product.image} className="card-img-top" alt={product.title} />
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <h5 className="card-text text-success"><b>{product.category}</b></h5>
                      <h5 className="card-text text-primary">Rs. {product.price}</h5>
                      <p className="card-text">{product.description}</p>
                    </div>
                </div>
                  </Link>
              </div>
              ))}
          </div>
        </div>
    </div>
  )
}

export default ProductListing