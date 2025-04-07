import styled from "styled-components";

export const BottomLogo = styled.img`
  max-width: 100%;
  height: auto;
`;

export const DesignBackground = styled.div`
  width: 1200px;
  height: 1200px;

  position: absolute;
  bottom: -70%;
  left: 50%;
  transform: translate(-50%);
  
  border-radius: 1050px;
  background-color: #E0E7ED;

  z-index: -10;

  @media (max-height: 760px) {
    display: none;
  }
`;

export const CharacterImg = styled.img`
  width: 12rem;

  position: fixed;
  bottom: 3rem;
  right: 1.5rem;

  opacity: 0.3;
  z-index: -2;
`;