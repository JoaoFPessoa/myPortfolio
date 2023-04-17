import styled, { keyframes, css } from "styled-components";

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;
const scaleIn = keyframes`
    from {
        transform: scale(0);
    }
    to {
        transform: scale(1);

    }
`;

const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;
const scaleOut = keyframes`
    from {
        transform: scale(1);
    }
    to {
        transform: scale(0);

    }
`;

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.3s;

  ${({ isClosing }) =>
    isClosing &&
    css`
      animation: ${fadeOut} 0.2s forwards;
    `}
`;
export const Container = styled.div`
  background: #fff;
  border-radius: 4px;
  padding: 1.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  animation: ${scaleIn} 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${({ isClosing }) =>
    isClosing &&
    css`
      animation: ${scaleOut} 0.2s forwards;
    `};
  > h1 {
    font-size: 22px;
    color: black;
  }
  p {
    margin-bottom: 2rem;
    color: black;
    opacity: 0.6;
  }
  .modal-body {
    margin-top: 32px;
  }
  img {
    width: 900px;
    height: 400px;
  }
`;

export const Contributors = styled.div`
  margin: 1rem;
  display: flex;
  width: 100%;
  align-items: center;
  h4 {
    margin-right: 8px;
    color: black;
  }
  div {
    display: flex;
    gap: 1rem;
    a {
      text-decoration: none;
      color: black;
      font-size: 15px;
      border: 1px solid black;
      padding: 5px;
      border-radius: 6px;
      transition: all 0.4s;
    }
    a:hover {
      background: gray;
      color: white;
    }
  }
`;
