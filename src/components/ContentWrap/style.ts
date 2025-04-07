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

export const DateText = styled.span`
  font-family: var(--font-ajou), sans-serif;

  font-size: 1rem;
  font-weight: 100;
  color: #1361A7;

  margin-top: .5rem;
`;

export const LinkButton = styled.div`
  width: 100%;
  padding: 1.5em;

  position: sticky;
  margin-bottom: 2rem;
  left: 0;

  font-family: var(--font-ajou), sans-serif;
  font-size: 1rem;
  font-weight: 100;
  color: white;

  text-align: center;

  background-color: #1361A7;
  border-radius: 1em;

  cursor: pointer;
`;

export const TopLogo = styled.img`
  height: 2.5rem;
`;
export const BottomLogo = styled.img`
  max-width: 100%;
  height: auto;
`;

export const ScrollSection = styled.section`
  width: 100%;
  
  flex: 1;
  height: auto;

  overflow-y: auto;

  @media (min-height: 760px) {
    margin-top: 0 !important;
  }
`;

export const PageTitle = styled.h1`
  font-family: var(--font-ajou), sans-serif;

  font-size: 2rem;
  font-weight: 100;
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