import logo from './logo.svg';
import './App.css';
import Header from './containers/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductListing from "./containers/ProductListing";
import ProductDetail from './containers/ProductDetail';
import NotFound from './containers/NotFound';
import CartList from './containers/CartList';


function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={ <Header />}>
              <Route path=""  element={<ProductListing />} />
              <Route path="product/:productId" element={<ProductDetail />} />
              <Route path="cart"  element={<CartList />} />
            </Route>
              <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
  );
}

export default App;
