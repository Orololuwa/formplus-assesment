import styled, { keyframes } from "styled-components";

const ldsripple = keyframes`
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
`;

const LoadingCtx = styled.div`
  display: inline-block;
  position: absolute;
  width: 80px;
  height: 80px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  div {
    position: absolute;
    border: 4px solid ${({ theme, color }) => theme.colors[color][500]};
    opacity: 1;
    border-radius: 50%;
    animation: ${ldsripple} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;

    &:nth-child(2) {
      animation-delay: -0.5s;
    }
  }
`;

export default LoadingCtx;
