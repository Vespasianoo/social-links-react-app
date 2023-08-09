import { createContext } from "react"
import { usePersistedState } from "../hooks/usePersistedState.js"
import dark from "../styles/themes/dark.js"
import light from "../styles/themes/light.js"

export const ThemeContext = createContext()

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = usePersistedState("theme", dark)

  const toggleTheme = () => {
    setTheme(theme.name === "dark" ? light : dark)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
