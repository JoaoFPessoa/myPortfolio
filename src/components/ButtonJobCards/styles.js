import styled from "styled-components";

export const Container = styled.button`
  width: 450px;
  height: 250px;
  border-radius: 10px;
  border: none;
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
  :hover {
    transform: scale(1.05);
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
