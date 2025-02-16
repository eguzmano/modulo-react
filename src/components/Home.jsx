import CardPizza from './CardPizza'
import Header from './Header'
import './Home.css'
import { pizzas } from '../pizzas'
import capitalize from '../utils/capitalize'

const Home = () => {
  return (
    <>
      <Header />
      <div className='cards'>
        {pizzas.map(({ name, img, price, ingredients, id }) => (

          <CardPizza
            key={id}
            name={capitalize(name)}
            img={img}
            price={price}
            ingredients={ingredients}
          />
        ))}
      </div>
    </>
  )
}

export default Home
