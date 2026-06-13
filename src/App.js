import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Product_detail from './Pages/Product-detail';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/:id' element={<Product_detail/>}></Route>
    </Routes>
    <Footer></Footer>
    </>
  );
}

export default App;
