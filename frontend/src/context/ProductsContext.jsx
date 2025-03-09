import { createContext, useEffect, useState } from 'react'

export const PizzaContext = createContext()

const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([])
  const [pizza, setPizza] = useState({})

  const fetchPizzas = async () => {
    const res = await fetch('http://localhost:5000/api/pizzas')
    const data = await res.json()
    return setPizzas(data)
  }
  useEffect(() => { fetchPizzas() }, [])

  const fetchPizza = async () => {
    const res = await fetch('http://localhost:5000/api/pizzas/p001')
    const data = await res.json()
    return setPizza(data)
  }
  useEffect(() => { fetchPizza() }, [])

  const globalState = {
    pizzas,
    pizza
  }

  return (
    <PizzaContext.Provider value={globalState}>
      {children}
    </PizzaContext.Provider>
  )
}
export default PizzaProvider
