import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, getItemsSelector } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";

const CartList = () => {
  const items = useSelector(getItemsSelector);
  const dispatch = useDispatch();

  function calculateTotal(items) {
      let totalPrice = 0;
      let totalQuantity = 0;

      items.forEach(item => {
          totalPrice += item.price * item.qt;
          totalQuantity += item.qt;
      });

      return { totalPrice, totalQuantity };
  }
  const { totalPrice, totalQuantity } = calculateTotal(items);
  return (
    <div className="container">
      <h3 className="my-5">Cart Item Lists</h3>
      <p>
        <Link to="/">Back</Link>
      </p>
      <div className="row mt-3">
        <table class="table">
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
            {items.map((item, key) => (
              <tr key={key}>
                <th scope="row">{key + 1}</th>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.qt}</td>
                <td>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={(e) => dispatch(deleteItem(key))}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {
              items.length > 0 ? ( <tr>
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
