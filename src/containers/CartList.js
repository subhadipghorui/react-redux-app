import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCart, removeFromCart } from "../redux/actions/cartAction";

const CartList = () => {
  const items = useSelector(state => state.cart.cartItems);
  console.log(items)
  const dispatch = useDispatch();

  function calculateTotal(items = []) {
      let totalPrice = 0;
      let totalQuantity = 0;

      items.forEach(item => {
          totalPrice += item.price * item.qt;
          totalQuantity += item.qt;
      });

      return { totalPrice, totalQuantity };
  }
  const { totalPrice, totalQuantity } = calculateTotal(items);

  useEffect(() => {
    console.log(items)
  }, [items]);
  return (
    <div className="container">
      <h3 className="my-5">Cart Item Lists</h3>
      <p>
        <Link to="/">Back</Link>
      </p>
      <div className="row mt-3">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Qt</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {items ? items.map((item, key) => (
              <tr key={key}>
                <th scope="row">{key + 1}</th>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.qt}</td>
                <td>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )): null}
            {
              items ? ( <tr>
                <th scope="row"></th>
                <td></td>
                <td>{totalPrice}</td>
                <td>{totalQuantity}</td>
                <td>
                  <button className="btn btn-sm btn-success">Buy</button>
                </td>
              </tr>): null
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartList;
