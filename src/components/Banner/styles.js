import styled from "styled-components";

export const Container = styled.div`
  margin: 0 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15rem;
  h1 {
    font-size: 54px;
    color: ${({ theme }) => theme.colors.font.colored};
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 8px;
    padding: 20px;
  }
  h2 {
    font-size: 24px;
    margin-top: 16px;
    color: ${({ theme }) => theme.colors.font.secondary};
    opacity: 0.8;
    max-width: 600px;
  }
  img {
    width: 300px;
    height: 300px;
    background: #6e07f3;
    border-radius: 50%;
    padding: 1rem;
  }
`;
