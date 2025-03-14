import { useState } from 'react'
import './Register.css'
import Toastify from 'toastify-js'
import 'toastify-js/src/toastify.css'

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const showToast = (message, type) => {
    Toastify({
      text: message,
      duration: 3000,
      close: true,
      gravity: 'top',
      position: 'right',
      offset: {
        x: 5,
        y: 50
      },
      style: {
        background: '#000', // Fondo negro
        color: '#fff', // Texto blanco
        fontWeight: 'bold', // Texto en negrita
        borderRadius: '5px', // Bordes redondeados
        padding: '10px'
      }
    }).showToast()
  }

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { email, password } = user
    if (!email.trim() || !password.trim()) {
      showToast('⚠️ Todos los campos son obligatorios!', 'error')
      return
    }
    if (password.length < 6) {
      showToast('🔒 La contraseña debe tener al menos 6 caracteres', 'error')
      return
    }
    showToast('✅ Inicio de sesion correctamente!', 'success')
    setUser({ email: '', password: '' })
  }

  return (
    <div className='container mt-4'>
      <p className='fs-3 fw-bold'>Iniciar sesion</p>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='exampleInputEmail1' className='form-label'>Email</label>
          <input
            type='email'
            className='form-control'
            id='exampleInputEmail1'
            name='email'
            value={user.email}
            onChange={handleChange}
            placeholder='Ingresa tu Email'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleInputPassword1' className='form-label'>Contraseña</label>
          <input
            type='password'
            className='form-control'
            id='exampleInputPassword1'
            name='password'
            value={user.password}
            onChange={handleChange}
            placeholder='Contraseña'
          />
        </div>

        <button
          type='submit'
          className='btn btn-dark'
        >
          Iniciar sesion
        </button>
      </form>
    </div>

  )
}

export default Login
