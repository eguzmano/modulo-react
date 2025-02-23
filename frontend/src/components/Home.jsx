import './Home.css'
import CardPizza from './CardPizza'
import Header from './Header'
import capitalize from '../utils/capitalize'
import { useEffect, useState } from 'react'

const Home = () => {
  const [pizzas, setPizzas] = useState([])

  const getPizzas = async () => {
    const res = await fetch('http://localhost:5000/api/pizzas')
    const data = await res.json()
    return setPizzas(data)
  }
  useEffect(() => { getPizzas() }, [])

  return (
    <>
      <Header />
      <div className='cards'>
        {pizzas?.length > 0
          ? (
              pizzas.map(({ name, img, price, ingredients, id }) => (
                <CardPizza
                  key={id}
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
