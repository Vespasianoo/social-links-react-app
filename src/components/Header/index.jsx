import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"

import * as S from "./styles"

import { Sun } from "lucide-react"

export function Header() {
  const { toggleTheme } = useContext(ThemeContext)

  return (
    <S.Container>
      <img
        src="https://github.com/Vespasianoo.png"
        alt="Foto de Matheus Vespasiano com óculos"
      />

      <h1>Matheus Vespasiano</h1>
      <p>@m.vespasiano04</p>

      <button onClick={toggleTheme}>
        <Sun />
      </button>
    </S.Container>
  )
}
