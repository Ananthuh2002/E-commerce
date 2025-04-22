
import './App.css';
import Navbar from './Components/navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './pages/Shop';
import Product from './pages/Product';
import LoginPage from './Components/Login/LoginPage';
import ShopCategory from './pages/ShopCategory';
import men_banner from './Components/Assests/banner_mens.png';
import women_banner from './Components/Assests/banner_women.png';
import kids_banner from './Components/Assests/banner_kids.png';
import { Footer } from './Components/Footer/Footer';




function App() {
  return (
    <div>
      <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path='/' element={<Shop/>}/>
              <Route path='/login' element={<LoginPage/>}/>
              <Route path='/men' element={<ShopCategory banner={men_banner} category ="men"/>}/>
              <Route path='/women' element={<ShopCategory banner={women_banner} category ="women"/>}/>
              <Route path='/kids' element={<ShopCategory banner={kids_banner} category ="kid"/>}/>
              <Route path='/product' element={<Product/>}/>
              <Route path='/:productId' element={<Product/>}/>
            </Routes>
            <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
