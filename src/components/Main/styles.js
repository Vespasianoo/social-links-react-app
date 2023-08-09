import styled from "styled-components"

export const Container = styled.main`
  width: 100%;
  ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 16px;
    > li {
      > a {
        display: flex;
        justify-content: center;
        width: inherit;
        padding-block: 16px;

        background: ${({ theme }) => theme.colors.primaryColor};
        border-radius: 6px;

        font-size: 14px;
        font-weight: 700;
        line-height: 150%;
        text-transform: uppercase;

        transition: background 300ms;

        &:hover {
          background: ${({ theme }) => theme.colors.primaryColorHover};
        }
      }
    }
  }
`
