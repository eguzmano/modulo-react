import './App.css'
import Navbar from './components/Navbar'
// import Register from './components/Register'
// import Login from './components/Login'
// import Home from './components/Home'
// import Cart from './components/Cart'
import Pizza from './components/Pizza'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='wrapper'>
      <Navbar />
      <div className='content'>
        {/* <Register /> */}
        {/* <Login /> */}
        {/* <Home /> */}
        {/* <Cart /> */}
        <Pizza />
      </div>
      <Footer />
    </div>
  )
}

export default App
