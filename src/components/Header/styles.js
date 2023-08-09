import styled from "styled-components"

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 48px;

  > img {
    width: 100px;
    border-radius: 50%;
    padding: 3.7px;
    border: 4px solid ${({ theme }) => theme.colors.primaryColor};
    margin-bottom: 24px;
  }

  > h1 {
    color: ${({ theme }) => theme.colors.textColor1};
    font-size: 32px;
    font-weight: 600;
  }
  > p {
    color: ${({ theme }) => theme.colors.textColor1};
    opacity: 0.8;
    font-family: "Roboto Mono";
    font-size: 18px;
    line-height: 150%;
  }

  > button {
    display: grid;
    place-items: center;
    position: absolute;
    right: 24px;
    top: 24px;

    max-width: 42px;
    height: 42px;
    padding: 8px;

    background: ${({ theme }) => theme.colors.textColor1};
    border: none;
    border-radius: 6px;

    cursor: pointer;
    transition: background 200ms;

    > svg,
    path {
      stroke: ${({ theme }) => theme.colors.background};
      transition: stroke 200ms;
    }
  }
`
