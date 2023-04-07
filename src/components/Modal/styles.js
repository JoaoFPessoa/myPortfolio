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
  }
  p {
    margin-bottom: 2rem;
  }
  .modal-body {
    margin-top: 32px;
  }
  img {
    width: 900px;
    height: 400px;
  }
`;
