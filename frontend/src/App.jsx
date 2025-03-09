import './App.css'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Pizza from './pages/Pizza'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartProvider from './context/CartContext'
import { ToastContainer } from 'react-toastify'
import PizzaProvider from './context/ProductsContext'

const App = () => {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <CartProvider>

          <ToastContainer
            containerId='customToastContainer'
            position='top-right'
            autoClose={2000}
          />
          <Navbar />
          <div className='content container'>
            <Routes>
              <Route
                path='/' element={<PizzaProvider><Home /></PizzaProvider>}
              />
              <Route
                path='/register' element={<Register />}
              />
              <Route
                path='/login' element={<Login />}
              />
              <Route
                path='/cart' element={<Cart />}
              />
              <Route
                path='/pizza/p001' element={<PizzaProvider><Pizza /></PizzaProvider>}
              />
              <Route
                path='/profile' element={<Profile />}
              />
              <Route
                path='/404' element={<NotFound />}
              />
            </Routes>
          </div>
        </CartProvider>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
