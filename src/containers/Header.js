import React from "react";
import { Link, Outlet } from "react-router-dom";
const Header = () => {
  return (
   <>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
    
    <ul className="nav container">
      <li><h3>FakeShop</h3></li>
        <li className="nav-item">
          <Link to={"/"} className="nav-link active">Home</Link>
        </li>
      </ul>
    </nav>
    <section>
      <Outlet />
    </section>
   </>
  );
};

export default Header;
