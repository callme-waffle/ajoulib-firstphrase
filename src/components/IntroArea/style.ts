import styled from "styled-components";

export const IntroAreaWrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;

  font-family: var(--font-ajou), sans-serif;

  position: sticky;
  top: 25%;
  transform: translateY(-50%);
  z-index: 100;
`;

export const BookTitleLoc = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  & h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #1361A7;
  }

  & h3 {
    font-size: 1.25rem;
    font-weight: 300;
  }
`;

export const BookLocSpec = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;

  gap: .5rem;

  font-family: "Noto Sans KR", sans-serif;

  & span {
    font-size: 1rem;
    font-weight: 400;
  }
`;
