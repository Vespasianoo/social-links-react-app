import * as S from "./styles"
import { Sun } from "lucide-react"

export function Header({ handleTheme }) {
  return (
    <S.Container>
      <img
        src="https://github.com/Vespasianoo.png"
        alt="Foto de Matheus Vespasiano com óculos"
      />

      <h1>Matheus Vespasiano</h1>
      <p>@m.vespasiano04</p>

      <button onClick={handleTheme}>
        <Sun />
      </button>
    </S.Container>
  )
}
