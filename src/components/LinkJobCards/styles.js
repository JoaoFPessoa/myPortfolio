import styled, { keyframes } from "styled-components";

export const Container = styled.a`
  width: 450px;
  height: 250px;
  border-radius: 10px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: 
    url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  h1 {
    display: none;
  }

  :hover h1 {
    display: block;
    color: white;
  }

  :hover {
    transform: scale(1.05);
    background-image: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${(props) => props.image});
  }

  @media (max-width: 768px) {
    h1 {
      text-align: center;
    }
  }
`;

export const ButtonContainer = styled.button`
  width: 450px;
  height: 250px;
  border-radius: 10px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${(props) => props.image});
  background-size: cover;
  h1 {
    color: #fff;
  }
`;
