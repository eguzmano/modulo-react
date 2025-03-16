import React, { createContext, useMemo, useState } from 'react'

export const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true)

  const logoutUser = () => setToken(false)

  const globalState = useMemo(() => ({
    token,
    logoutUser
  }), [token])

  return (
    <UserContext.Provider value={globalState}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
