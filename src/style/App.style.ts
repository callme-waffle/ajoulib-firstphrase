import styled from "styled-components";
import { breathe, breathe_out } from "./App.transition";

export const GlobalSection = styled.section`
  width: 100vw;
  height: 100svh;

  position: relative;

  background-color:rgb(250, 250, 250);
`;

export const AppSection = styled.section`
  width: calc(100% - 1.5rem);
  max-width: 500px;
  height: calc(100% - 1.5rem);

  padding: 0;

  background-color: #fefefe;
  border-radius: 1rem;
  border: 1px solid #eaeaea;

  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  overflow: hidden;

  @media screen and (max-width: 650px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`;

export const LoadingCharacterContainer = styled.section`
  width: 12rem;
  height: 12rem;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  opacity: 1;
  transition: opacity .2s cubic-bezier(0, 1, 1, 1);

  &.fading {
    opacity: 0;
  }
`;

export const LoadingCharacter = styled.img`
  width: 12rem;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  animation: ${breathe} 1.5s cubic-bezier(0, 1, 1, 1) infinite;
  transition: opacity 2s ease-in-out, animation 0.2s ease-out;

  z-index: 1;
`;

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