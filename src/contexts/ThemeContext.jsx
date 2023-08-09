import { createContext, useState } from "react"
import dark from "../styles/themes/dark.js"
import light from "../styles/themes/light.js"

export const ThemeContext = createContext()

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(dark)

  const toggleTheme = () => {
    setTheme(theme.name === "dark" ? light : dark)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
