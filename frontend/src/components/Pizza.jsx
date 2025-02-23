import { useState, useEffect } from 'react'
import capitalize from '../utils/capitalize'
import formatNumber from '../utils/formatNumber'

const Pizza = () => {
  const [pizza, setPizza] = useState({})

  const getPizza = async () => {
    const res = await fetch('http://localhost:5000/api/pizzas/p001')
    const data = await res.json()
    return setPizza(data)
  }
  useEffect(() => { getPizza() }, [])

  return (
    <div className='card my-5 mx-auto shadow' style={{ maxWidth: '1200px' }}>
      <div className='row g-0'>
        <div className='col-md-6'>
          <img src={pizza.img} className='img-fluid rounded-start' alt={pizza.name} />
        </div>
        <div className='col-md-6'>
          <div className='card-body p-4 h-100 d-flex flex-column justify-content-between'>
            <h4 className='card-title text-start'>{pizza.name ? capitalize(pizza.name) : ''}</h4>
            <p className='card-text text-start'>{pizza.desc}</p>
            <p className='card-text text-start'>{pizza.ingredients ? pizza.ingredients.map(i => (<li key={i}>🍕 {capitalize(i)}</li>)) : null}</p>
            <div className='d-flex justify-content-evenly ms-3'>
              <h5 className='card-text d-flex align-items-center'>Precio: ${pizza.price ? formatNumber(pizza.price) : '0'}</h5>
              <button className='btn btn-dark'>{capitalize('añadir')} 🛒</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pizza
