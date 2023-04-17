import styled from "styled-components";

export const Container = styled.div`
  background: #6e07f3;
  margin-top: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 800px;
  padding-top: 10rem;

  p {
    color: #f6f5fc;
    font-size: 24px;
    display: block;
  }
  span {
    color: #e0e3ff;
    margin-top: 2rem;
    max-width: 500px;
    text-align: center;
  }
  @media (max-width: 768px) {
    margin-top: 2rem;
    padding-top: 4rem;
    p {
      font-size: 16px;
      font-weight: bold;
    }
    span {
      max-width: 360px;
      line-height: 150%;
    }
  }
`;

export const Skills = styled.div`
  background: #f6f5fc;
  width: 400px;
  border-radius: 10px;
  margin-top: 7rem;
  margin-bottom: -200px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #292f36;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  padding-bottom: 2rem;

  img {
    width: 70px;
    height: 70px;
    background: ${({ theme }) => theme.colors.font.colored};
    padding: 15px;
    border-radius: 50px;
  }
  h1 {
    font-size: 24px;
    margin-top: 1rem;
  }
  ul {
    text-align: center;
    margin-top: 1rem;
    list-style-type: none;
  }
  li {
    margin-top: 15px;
  }
  @media (max-width: 768px) {
    width: 350px;
    padding-bottom: 6rem;
  }
`;
