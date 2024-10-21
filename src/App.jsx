import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Profile from './Pages/Profile';
import Checkout from './Pages/Checkout';
import Login from './Pages/Login';
import Register from './Pages/Register';
import NotFound from './Pages/NotFound';
import Navbar from './components/Navbar';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
    <Toaster />
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='shop' element={<Shop/>} />
      <Route path='shop/product/:id' element={<Product/>} />
      <Route path='profile' element={<Profile/>} />
      <Route path='checkout' element={<Checkout/>} />
      <Route path='login' element={<Login/>} />
      <Route path='register' element={<Register/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>

    </>
  )
}

export default App
