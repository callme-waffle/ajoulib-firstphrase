import { keyframes } from "styled-components";

export const breathe = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(0.9);
    opacity: 0.3;
  }
  50% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(0.9);
    opacity: 0.3;
  }
`;

export const breathe_out = keyframes`
  99% {
    transform: translate(-50%, -50%) scale(0.9);
    opacity: 0;
  }
  100% {
    display: none;
  }
`;