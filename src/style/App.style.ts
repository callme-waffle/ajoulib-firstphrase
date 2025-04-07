import styled from "styled-components";

export const GlobalSection = styled.section`
  width: 100vw;
  height: 100vh;

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
`;