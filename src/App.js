import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { Home } from './Pages/home/Home';
import Cart from './Pages/cart/Cart';
import Products from './Pages/products/Products';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/"  element={<Home />}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/cart" element={<Cart />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
