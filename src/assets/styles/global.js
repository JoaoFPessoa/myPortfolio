import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Sora', sans-serif;
    
}
body {
    overflow-x: hidden;
    background: ${({ theme }) => theme.colors.background};
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.font.secondary};

    &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.font.colored};
    border-radius: 5px;
  }
}
button {
    cursor: pointer;
}
`;
