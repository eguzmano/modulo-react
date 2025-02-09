import { useState } from 'react'
import './Register.css'
import Toastify from 'toastify-js'
import 'toastify-js/src/toastify.css'

const Register = () => {
  const [users, setUsers] = useState({
    email: '',
    password: '',
    repeatPassword: ''
  })

  const showToast = (message, type) => {
    Toastify({
      text: message,
      duration: 3000,
      close: true,
      gravity: 'top',
      position: 'right',
      style: {
        background: type === 'error' ? 'linear-gradient(to right,rgb(104, 32, 19),rgb(74, 19, 32))' : 'linear-gradient(to right,rgb(0, 92, 81),rgb(66, 89, 26))'
      }
    }).showToast()
  }

  const handleChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { email, password, repeatPassword } = users
    if (!email.trim() || !password.trim() || !repeatPassword.trim()) {
      showToast('⚠️ Todos los campos son obligatorios!', 'error')
      return
    }
    if (password !== repeatPassword) {
      showToast('❌ Las contraseñas no coinciden!', 'error')

      return
    }
    if (password.length < 6) {
      showToast('🔒 La contraseña debe tener al menos 6 caracteres', 'error')
      return
    }
    showToast('✅ Usuario creado correctamente!', 'success')
    setUsers({ email: '', password: '', repeatPassword: '' })
  }
  return (
    <div className='container mt-4'>
      <p className='fs-3'>Registro</p>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='exampleInputEmail1' className='form-label'>Email</label>
          <input
            type='email'
            className='form-control'
            id='exampleInputEmail1'
            name='email'
            value={users.email}
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
            value={users.password}
            onChange={handleChange}
            placeholder='Contraseña'
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='exampleInputPassword1' className='form-label'>Confirmar Contraseña</label>
          <input
            type='password'
            className='form-control'
            id='exampleInputPassword1'
            name='repeatPassword'
            value={users.repeatPassword}
            onChange={handleChange}
            placeholder='Repite tu Contraseña'
          />
        </div>
        <button
          type='submit'
          className='btn btn-dark'
        >
          Crear Cuenta
        </button>
      </form>
    </div>

  )
}

export default Register
