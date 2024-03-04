import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom';
import App from '../App';
import CartList from '../Components/CartList';
import Product from '../Components/Product';

const Router = () => {
    const RouterConfig = [
        {
          path: "/",
          element: <App />,
          children: [
            {
              path: "",
              element: <Product />,
            },
            {
              path: "cart-items",
              element: <CartList />,
            },
          ]
        },
        {
            path: "*",
            element: <Navigate to="/" /> ,
        },
      ];
    const element = useRoutes(RouterConfig);
    return element;
}

export default Router