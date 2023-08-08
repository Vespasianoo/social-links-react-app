import { useState } from "react"

import { ThemeProvider } from "styled-components"
import GlobalStyles from "./styles/GlobalStyles.js"
import themes from "./styles/themes/index.js"

import { Layout } from "./components/Layout"

export function App() {
  const [theme, setTheme] = useState("dark")

  const handleTheme = () => {
    setTheme(prevState => (prevState === "dark" ? "light" : "dark"))
  }
  return (
    <ThemeProvider theme={themes[theme]}>
      <Layout handleTheme={handleTheme} />
      <GlobalStyles />
    </ThemeProvider>
  )
}
