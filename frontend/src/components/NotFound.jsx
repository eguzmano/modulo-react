import { Link } from 'react-router-dom'
import errorImage from '../assets/imgs/404.jpg'

const NotFound = () => {
  return (
    <div className='container d-flex flex-column mt-5 p-5'>
      <p className='fw-bold' style={{ fontSize: '300px' }}>4<img className='w-25 pb-5' src={errorImage} alt='0' />4</p>
      <p className='fs-1'>ERROR!</p>
      <p className='fs-2'>Page Not Found</p>
      <Link to='/' className='btn btn-dark mt-5 py-2 px-3 fs-5 mx-auto'>Back to Home</Link>
    </div>
  )
}

export default NotFound
