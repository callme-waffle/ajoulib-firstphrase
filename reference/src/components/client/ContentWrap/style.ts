import styled from "styled-components";

export const StyledSection = styled.section`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2rem;
  box-sizing: border-box;

  position: relative;
  overflow: hidden;
`;

export const TopLogo = styled.img`
  height: 2.5rem;
`;
export const BottomLogo = styled.img`
  max-width: 100%;
  height: auto;
`;

export const ScrollSection = styled.section`
  flex: 1;
  height: auto;
`;

export const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: #1361A7;

  margin: 0;
  margin-top: 1.5rem;
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

  z-index: -1;
`;

export const CharacterImg = styled.img`
  width: 12rem;

  position: fixed;
  bottom: 3rem;
  right: 1.5rem;

  opacity: 0.3;
  z-index: 1;
`;