import styled from "styled-components";

export const Container = styled.div`
  background: rgb(110, 7, 243);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  margin-top: 8rem;
  h1 {
    color: #fff;
  }
  @media (max-width: 768px) {
    margin-top: 5rem;
  }
`;
export const Location = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  img {
    width: 40px;
    height: 40px;
  }
  h3 {
    color: ${({ theme }) => theme.colors.font.colored};
    margin: 1rem 0;
  }
  p {
    color: #fff;
    margin-top: 1rem;
  }
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    text-decoration-line: none;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 2rem;
    img {
      width: 30px;
      height: 30px;
    }
    h3 {
      font-size: 18px;
      margin: 0.4rem;
    }
    p {
      font-size: 14px;
    }
  }
`;

export const LocationContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 10rem;
  @media (max-width: 768px) {
    padding: 0 1rem;
    flex-direction: column;
  }
`;
