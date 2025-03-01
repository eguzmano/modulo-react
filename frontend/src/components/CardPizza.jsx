import './CardPizza.css'
import formatNumber from '../utils/formatNumber'
import capitalize from '../utils/capitalize'

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className='card mx-3 my-3 card-pizza'>
      <img src={img} className='card-img-top' alt={name} />
      <div className='card-body d-flex flex-column'>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item fs-4'>{name}</li>
          <li className='list-group-item mx-auto'>
            <strong className='d-flex'>🍕 Ingredientes: </strong>
            <ul className='ingredients my-3'>
              {ingredients.map(i => (<li key={i}>{capitalize(i)}</li>))}
            </ul>
          </li>
          <li className='list-group-item'>Precio: ${formatNumber(price)}</li>
        </ul>
        <div className='buttons'>
          <button className='btn btn-light'>Ver mas 👀</button>
          <button className='btn btn-dark'>Añadir al 🛒</button>
        </div>
      </div>
    </div>
  )
}

export default CardPizza
