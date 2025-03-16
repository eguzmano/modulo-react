import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Profile = () => {
  const { logoutUser } = useContext(UserContext)
  return (
    <div className='card text-center w-50 mx-auto mt-5'>
      <div className='card-header'>
        <h4 className='m-1'>Profile</h4>
      </div>
      <div className='card-body d-flex flex-column align-items-start'>
        <h5 className='card-title my-3'>Username: Admin</h5>
        <h5 className='card-text mb-3'>Email: admin@test.cl</h5>
      </div>
      <div className='card-footer text-body-secondary d-flex justify-content-between'>
        <p className='my-auto'>
          Ultima actualizacion: Hace 2 dias.
        </p>
        <button className='btn btn-dark px-5' onClick={logoutUser}>Log Out</button>
      </div>
    </div>
  )
}

export default Profile
