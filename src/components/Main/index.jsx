import * as S from "./styles"

import { Twitter, Github, Mail, Braces, MenuSquare } from "lucide-react"
export function Main() {
  return (
    <S.Container>
      <ul>
        <li>
          <a href="#" target="_blank">
            <Twitter />
            Twitter
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <Github />
            Github
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <Mail />
            Email
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <Braces />
            Portfólio
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <MenuSquare />
            Currículo
          </a>
        </li>
      </ul>
    </S.Container>
  )
}
