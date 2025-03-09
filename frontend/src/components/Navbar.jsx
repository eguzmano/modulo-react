import { useContext } from 'react'
import formatNumber from '../utils/formatNumber'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const Navbar = () => {
  const { total } = useContext(CartContext)
  const token = false

  return (
    <nav className='navbar navbar-expand-lg bg-body-dark fixed-top px-5'>
      <div className='container-fluid px-5'>
        <Link
          to='/'
          className='navbar-brand text-light' href='#'
        >
          Pizzería Mamma Mia!
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link
                to='/'
                className='btn btn-outline-light'
                aria-current='page'
              >
                🍕 Home
              </Link>
            </li>
            {token
              ? (
                <>
                  <li className='nav-item'>
                    <Link to='/profile' className='btn btn-outline-light'>
                      🔓 Profile
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='btn btn-outline-light'>
                      🔒 Logout
                    </Link>
                  </li>
                </>
                )
              : (
                <>
                  <li className='nav-item'>
                    <Link to='/login' className='btn btn-outline-light'>
                      🔐 Login
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/register' className='btn btn-outline-light'>
                      🔐 Register
                    </Link>
                  </li>
                </>
                )}
          </ul>
          <Link to='/cart'>
            <button className='btn btn-outline-light'>
              🛒 Total: ${formatNumber(total)}
            </button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
