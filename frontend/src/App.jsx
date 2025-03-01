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
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='wrapper'>
      <Navbar />
      <div className='content container'>
        <Routes>
          <Route
            path='/' element={<Home />}
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
            path='/pizza/p001' element={<Pizza />}
          />
          <Route
            path='/profile' element={<Profile />}
          />
          <Route
            path='/404' element={<NotFound />}
          />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
