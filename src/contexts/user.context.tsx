import { FunctionComponent, createContext, useState } from 'react'

import User from '../types/user.types'

interface IUserContext {
  currentUser: User | null
  isAuthenticated: boolean
  loginUser: (user: User) => void
  logoutUser: () => void
}

interface CustomCurrentUser {
  children: React.ReactNode
}

export const UserContext = createContext<IUserContext>({
  currentUser: null,
  isAuthenticated: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  loginUser: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  logoutUser: () => {}
})

const UserContextProvider: FunctionComponent<CustomCurrentUser> = ({
  children
}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  const isAuthenticated = currentUser !== null

  const loginUser = (user: User) => {
    setCurrentUser(user)
  }

  const logoutUser = () => {
    setCurrentUser(null)
  }

  return (
    <UserContext.Provider
      value={{ currentUser, isAuthenticated, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
