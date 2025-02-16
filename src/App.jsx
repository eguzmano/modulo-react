import './App.css'
import Cart from './components/Cart'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Register from './components/Register'
import Login from './components/Login'

const App = () => {
  return (
    <div className='wrapper'>
      <Navbar />
      <div className='content'>
        <Home />
        <Register />
        <Login />
        <Cart />
      </div>
      <Footer />
    </div>
  )
}

export default App
