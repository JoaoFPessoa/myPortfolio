import styled from "styled-components";

export const Container = styled.div`
  background: rgb(110, 7, 243);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;

  h1 {
    color: #fff;
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
`;

export const LocationContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 10rem;
`;
