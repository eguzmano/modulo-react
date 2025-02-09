import './CardPizza.css'
import formatNumber from '../utils/formatNumber'

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className='card'>
      <img src={img} className='card-img-top' alt={name} />
      <div className='card-body'>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item fs-4'>{name}</li>
          <li className='list-group-item'>
            <strong>Ingredientes: </strong>
            <br />
            🍕 {ingredients.join(', ')}.
          </li>
          <li className='list-group-item'>Precio: ${formatNumber(price)}</li>
        </ul>
        <button className='btn btn-light'>Ver mas 👀</button>
        <button className='btn btn-dark'>Añadir al 🛒</button>
      </div>
    </div>
  )
}

export default CardPizza
