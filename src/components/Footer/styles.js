import styled from "styled-components"

export const Container = styled.footer`
  > a {
    color: ${({ theme }) => theme.colors.textColor1};
    opacity: 0.6;
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;

    transition: opacity 300ms;
    &:hover {
      opacity: 1;
    }
  }
`
