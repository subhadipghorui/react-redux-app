import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';


const Header = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  console.log("cartItems")
  console.log(cartItems)
  const totalQuantity = cartItems ? cartItems.reduce((total, item) => total + item.qt, 0): 0;
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <h3>FakeShop</h3>
          <ul className="nav ">
            <li className="nav-item">
              <Link to={"/cart"} className="nav-link active">
                Cart Items ({totalQuantity})
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/"} className="nav-link active">
                Home
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <section>
        <Outlet />
      </section>
    </>
  );
};

export default Header;
