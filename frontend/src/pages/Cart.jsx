import formatNumber from '../utils/formatNumber'
import capitalize from '../utils/capitalize'
import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { UserContext } from '../context/UserContext'
import axios from 'axios'
import showToast from '../utils/showToast'

const Cart = () => {
  const { pizzaCart, total, increaseQuantity, decreaseQuantity, removeAll, clearCart } = useContext(CartContext)
  const { token } = useContext(UserContext)

  const handleSubmit = async (e) => {
    if (e) {
      e.preventDefault()
    }
    try {
      const headers = {
        Authorization: `Bearer ${token}`
      }
      const resCheckout = await axios.post('http://localhost:5000/api/checkouts', { items: pizzaCart }, { headers })
      const checkoutData = resCheckout.data
      console.log('Respuesta del Backend:', checkoutData)
      console.log('Detalle del pedido:', checkoutData.cart.items)

      showToast('✅ Su pedido se ha procesado con exito', 'success')

      clearCart()
    } catch (error) {
      console.error(error)
      showToast('❌ Error al procesar el pago', 'error')
    }
  }

  const pay = () => {
    if (total > 0) {
      handleSubmit()
    } else {
      showToast('⚠️ El carrito esta vacio', 'error')
    }
  }

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
                        <button
                          type='button'
                          className='btn btn-dark mx-2'
                          onClick={() => removeAll(p.id)}
                        >
                          Eliminar todo
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
      <h4 className='mb-3'><strong>Total: ${formatNumber(total)}</strong></h4>
      {token ? '' : <h5>Para continuar con el pago debes iniciar sesion</h5>}
      <div className='d-flex justify-content-center'>
        {(pizzaCart.length !== 0)
          ? <>
            <button
              className='btn btn-dark px-4 align-self-center'
              onClick={clearCart}
            >
              Vaciar carrito
            </button>
            <button
              className='btn btn-dark px-5 align-self-center'
              onClick={pay}
              disabled={!token}
            >
              Pagar
            </button>
          </>
          : null}
      </div>
    </div>
  )
}

export default Cart
