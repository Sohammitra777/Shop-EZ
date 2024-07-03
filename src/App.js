import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from "./Pages/Home"
import Electronics from "./Pages/Electronics"
import Homeandfurnitures from "./Pages/Homeandfurnitures"
import Product from "./Pages/Product"
import Cart from "./Pages/Cart"
import Loginsignup from "./Pages/Loginsignup"
import Footer from './components/Footer/Footer';
import mens_banner from "./components/Assets/mens_banner.jpg"
import womens_banner from "./components/Assets/womens_banner.jpg"
import kids_banner from "./components/Assets/kids_banner.jpg"
import Fashioncategory from './Pages/Fashioncategory';
import Signin from './Pages/signin'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Electronics" element={<Electronics/>}/>
          <Route path='/Fashion/Mens' element={<Fashioncategory banner={mens_banner} category="Mens"/>}></Route>
          <Route path='/Fashion/Womens' element={<Fashioncategory banner={womens_banner} category="Womens"/>}></Route>
          <Route path='/Fashion/Kids' element={<Fashioncategory banner={kids_banner} category="Kids"/>}></Route>
          <Route path="/Homeandfurnitures" element={<Homeandfurnitures/>}/>
          <Route  path="/product" element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/Loginsignup" element={<Loginsignup/>}/>
          <Route path="/signin" element={<Signin/>}/>
          ro
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;