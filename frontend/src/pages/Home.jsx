import './Home.css'
import CardPizza from '../components/CardPizza'
import Header from '../components/Header'
import capitalize from '../utils/capitalize'
import { useContext } from 'react'
import { PizzaContext } from '../context/ProductsContext'

const Home = () => {
  const { pizzas } = useContext(PizzaContext)
  return (
    <>
      <Header />
      <div className='cards'>
        {pizzas?.length > 0
          ? (
              pizzas.map(({ name, img, price, ingredients, id }) => (
                <CardPizza
                  key={id}
                  id={id}
                  name={capitalize(name)}
                  img={img}
                  price={price}
                  ingredients={ingredients}
                />
              ))
            )
          : (
            <p>Cargando pizzas...</p>
            )}
      </div>
    </>
  )
}

export default Home
