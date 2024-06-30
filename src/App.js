import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from "./Pages/Home"
import Electronics from "./Pages/Electronics"
import Fashion from "./Pages/Fashion"
import Homeandfurnitures from "./Pages/Homeandfurnitures"
import Product from "./Pages/Product"
import Cart from "./Pages/Cart"
import Loginsignup from "./Pages/Loginsignup"


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Electronics" element={<Electronics/>}/>
          <Route path="/Fashion" element={<Fashion/>}/>
          <Route path="/Homeandfurnitures" element={<Homeandfurnitures/>}/>
          <Route  path="/product" element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/Loginsignup" element={<Loginsignup/>}/>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
