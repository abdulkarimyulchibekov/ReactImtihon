import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
export const useTheme = () => {
  const {theme, setTheme} = useContext(ThemeContext)
  return [theme, setTheme]
}
