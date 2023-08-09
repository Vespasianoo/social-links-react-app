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
        align-items: center;
        gap: 12px;
        width: inherit;
        height: 50px;
        padding-block: 16px;

        background: ${({ theme }) => theme.colors.primaryColor};
        border-radius: 6px;

        font-size: 14px;
        font-weight: 700;
        text-transform: uppercase;

        transition: background 300ms;

        > svg {
          width: 20px;
          height: 20px;
        }

        &:hover {
          background: ${({ theme }) => theme.colors.primaryColorHover};
        }
      }
    }
  }
`
