import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'

export const useAuth = () => {
  const {token, setToken} = useContext(AuthContext)
  return [token, setToken]
}
