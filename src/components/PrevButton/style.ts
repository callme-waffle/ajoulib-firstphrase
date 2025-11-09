import styled from "styled-components";

export const PrevButton = styled.div<{isVisible: boolean}>`
  width: 4.5rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  position: sticky;
  left: 0;

  font-family: var(--font-ajou), sans-serif;
  font-size: 1rem;
  font-weight: 100;
  color: white;

  text-align: center;

  background-color: #fafafa;
  border: 1px solid #aaaaaaff;
  border-radius: 1em;
  
  opacity: 1;
  transition: all .2s cubic-bezier(0, 1, 1, 1);

  cursor: pointer;

  ${ ({isVisible}) => (isVisible) ? "" : `
    border: 1px solid #aaaaaa00;
    width: 0;
    opacity: 0;
  ` }
`;