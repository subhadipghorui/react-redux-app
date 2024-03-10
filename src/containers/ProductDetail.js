import React, { useEffect } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeSelectedProduct, selectedProduct } from '../redux/actions/productAction';

const ProductDetail = () => {
  const {productId} = useParams()
  let product = useSelector((state) => state.product);

  const dispatch = useDispatch()

  const fetchProduct = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
     
    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    if(productId && productId !== "") fetchProduct();
    return () => dispatch(selectedProduct(null));
  }, [productId]);

  return (
    <div className='container'>
        <h1>ProductDetail</h1>
        {Object.keys(product).length === 0 ? <h4>Loading...</h4>: <div key={product.id} className='col-12 mb-2 h-25'>
                  <div className="card">
                    <div className='row'>
                        <div className='col-md-6'>
                        <img src={product.image} className="card-img-top w-50" alt={product.title} />
                        </div>
                        <div className='col-md-6'>
                        <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <h5 className="card-text text-success"><b>{product.category}</b></h5>
                      <h5 className="card-text text-primary">Rs. {product.price}</h5>
                      <p className="card-text">{product.description}</p>

                      <div>
                        <button className='btn btn-primary'>Add to cart</button>
                      </div>
                    </div>
                        </div>
                    </div>
                </div>
        </div>}
    </div>
  )
}

export default ProductDetail