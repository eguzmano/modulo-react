import { createContext, useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'

export const PizzaContext = createContext()

const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([])
  const [pizza, setPizza] = useState({})
  const { id } = useParams()

  const fetchPizzas = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/pizzas')
      const data = await res.json()
      setPizzas(data)
    } catch (error) {
      console.log('Error fetching pizzas:', error)
    }
  }

  const fetchPizza = async (pizzaId) => {
    try {
      const res = await fetch(`http://localhost:5000/api/pizzas/${pizzaId}`)
      const data = await res.json()
      setPizza(data)
    } catch (error) {
      console.log('Error fetching pizza:', error)
    }
  }

  useEffect(() => {
    fetchPizzas()
  }, [])

  useEffect(() => {
    fetchPizza(id)
  }, [id])

  const globalState = useMemo(() => ({
    pizzas,
    pizza
  }), [pizzas, pizza])

  return (
    <PizzaContext.Provider value={globalState}>
      {children}
    </PizzaContext.Provider>
  )
}

export default PizzaProvider
