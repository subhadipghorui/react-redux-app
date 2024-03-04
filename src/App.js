import logo from './logo.svg';
import './App.css';
// index.js or App.js
import Product from './Components/Product';
import { BrowserRouter, Outlet } from 'react-router-dom';
import Router from './config/RouterConfig';
import Navbar from './Components/Navbar';

function App() {
  return (
      <>
       <Navbar />
        <Outlet />
      </>
  );
}

export default App;
