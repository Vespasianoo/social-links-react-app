import { useContext } from "react"
import { ThemeContext } from "./contexts/ThemeContext.jsx"

import { ThemeProvider } from "styled-components"
import GlobalStyles from "./styles/GlobalStyles.js"

import { Layout } from "./components/Layout"

export function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <ThemeProvider theme={theme}>
      <Layout />
      <GlobalStyles />
    </ThemeProvider>
  )
}
