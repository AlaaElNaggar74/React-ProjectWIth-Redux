import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './Component/Home';
import Cart from './Component/Cart';
import Navbar from './Component/Navbar';
import Products from './Component/Products';


function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Routes>
        <Route path="/" element={<>
          <Home/> 
        </>} />
        <Route path="/Cart" element={ <Cart/> } />
        <Route path="/Products" element={ <Products/> } />
      </Routes>
    </div>
  );
}

export default App;
