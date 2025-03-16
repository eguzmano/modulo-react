import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import AppRoutes from './routes/AppRoutes'
import AppProvider from './context/AppProvider'

const App = () => {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <AppProvider>
          <ToastContainer
            containerId='customToastContainer'
            position='top-right'
            autoClose={2000}
          />
          <Navbar />
          <AppRoutes />
        </AppProvider>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
