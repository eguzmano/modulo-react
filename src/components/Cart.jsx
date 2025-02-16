import { useState } from 'react'
import { pizzaCart as initialCart } from '../pizzas'
import formatNumber from '../utils/formatNumber'
import capitalize from '../utils/capitalize'
import './Cart.css'

const Cart = () => {
  const [pizzaCart, setPizzaCart] = useState(initialCart)

  // aumentar la cantidad
  const increaseQuantity = (id) => {
    setPizzaCart(pizzaCart.map(p =>
      p.id === id ? { ...p, count: p.count + 1 } : p
    ))
  }

  // disminuir la cantidad o eliminar la pizza
  const decreaseQuantity = (id) => {
    setPizzaCart(pizzaCart
      .map(p => p.id === id ? { ...p, count: p.count - 1 } : p)
      .filter(p => p.count > 0) // Elimina pizzas con cantidad 0
    )
  }

  // total del pedido
  const total = pizzaCart.reduce((acc, p) => acc + p.price * p.count, 0)

  return (
    <div className='cart-container'>
      <h3 className='my-4'>Detalles del pedido:</h3>
      {pizzaCart.length === 0
        ? (
          <h5 className='text-danger'>El carrito está vacío!</h5>
          )
        : (
            pizzaCart.map((p) => (
              <div className='card mb-4 mx-auto shadow card-cart' key={p.id}>
                <div className='row g-0'>
                  <div className='col-md-4'>
                    <img src={p.img} className='img-fluid rounded-start' alt={p.name} />
                  </div>
                  <div className='col-md-8 my-auto'>
                    <div className='card-body p-0'>
                      <h5 className='card-title ms-3'>{capitalize(p.name)}</h5>
                      <p className='card-text me-2 ms-auto'> ${formatNumber(p.price)}</p>
                      <div className='d-flex align-items-center'>
                        <button
                          type='button'
                          className='btn btn-outline-secondary mx-2'
                          onClick={() => decreaseQuantity(p.id)}
                        >
                          -
                        </button>
                        <p className='quantity'>{p.count}</p>
                        <button
                          type='button'
                          className='btn btn-outline-secondary mx-2'
                          onClick={() => increaseQuantity(p.id)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
      <h4 className='mb-3'><strong>Total: ${formatNumber(total)}</strong></h4>
      {pizzaCart.length > 0 && <button className='btn btn-dark px-5 align-self-center'>Pagar</button>}
    </div>
  )
}

export default Cart
