import * as S from "./styles"

import { Header } from "../Header"
import { Main } from "../Main"
import { Footer } from "../Footer"

export function Layout() {
  return (
    <S.Container>
      <Header />
      <Main />
      <Footer />
    </S.Container>
  )
}
