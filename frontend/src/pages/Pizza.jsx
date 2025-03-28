import capitalize from '../utils/capitalize'
import formatNumber from '../utils/formatNumber'
import { PizzaContext } from '../context/ProductsContext'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Pizza = () => {
  const { pizza } = useContext(PizzaContext)
  const { addToCart } = useContext(CartContext)

  return (
    <div className='card my-5 mx-auto shadow' style={{ maxWidth: '1200px' }}>
      <div className='row g-0'>
        <div className='col-md-6'>
          <img src={pizza.img} className='img-fluid rounded-start' alt={pizza.name} />
        </div>
        <div className='col-md-6'>
          <div className='card-body p-4 h-100 d-flex flex-column justify-content-between align-items-start'>
            <h4 className='card-title'>{pizza.name ? capitalize(pizza.name) : ''}</h4>
            <p className='card-text text-start'>{pizza.desc}</p>
            <p className='card-text text-start ms-0'>{pizza.ingredients ? pizza.ingredients.map(i => (<li key={i}>🍕 {capitalize(i)}</li>)) : null}</p>
            <div className='d-flex justify-content-around mx-auto'>
              <h5 className='card-text d-flex align-items-center m-0 me-5'>Precio: ${pizza.price ? formatNumber(pizza.price) : '0'}</h5>
              <button className='btn btn-dark ms-5' onClick={() => addToCart(pizza)}>{capitalize('añadir')} 🛒</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pizza
