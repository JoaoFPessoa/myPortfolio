import styled, { keyframes } from "styled-components";

const slideFromLeft = keyframes`
  from {
    margin-left: -100%;
  }

  to {
    margin-left: 0%;
  }
`;

export const Container = styled.div`
  margin: 0 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15rem;
  h1 {
    font-size: 54px;
    color: ${({ theme }) => theme.colors.font.colored};
    border-radius: 8px;
    padding: 20px;
    animation: ${slideFromLeft} 0.8s;
    max-width: 450px;
  }
  h2 {
    font-size: 24px;
    margin-top: 16px;
    color: ${({ theme }) => theme.colors.font.secondary};
    opacity: 0.8;
    width: 600px;
  }
  @media (max-width: 768px) {
    margin: 0;
    h1 {
      font-size: 24px;
      width: 200px;
    }
    h2 {
      font-size: 18px;
      width: 200px;
    }
  }
`;
const slideFromRight = keyframes`
  from {
    transform: translate(1000px);
  }

  to {
    transform: translate(0px);
  }
`;

export const ImageContainer = styled.div`
  width: 300px;
  height: 300px;
  background: #ff6000;
  border-radius: 50%;
  animation: ${slideFromRight} 0.8s;
  img {
    width: 300px;
    height: 300px;
    padding: 1rem;
  }
  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    margin-right: 1rem;
    img {
      width: 150px;
      height: 150px;
    }
  }
`;
