import styled from "styled-components";

export const TextContainer = styled.section`
  min-width: 2rem;
  min-height: 2rem;
  width: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Content = styled.span`
  font-family: "Nanum Pen Script", sans-serif;

  width: calc(100% - 3rem);

  font-size: 1.5rem;
  line-height: 1.5;
  color: #333;
  word-break: keep-all;

  /* display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden; */
`;

export const OpenQuota = styled.img`
  position: absolute;
  top: 0;
  left: 0;

  width: 0.75rem;
`;

export const CloseQuota = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(-100%, -100%);

  width: 0.75rem;
`;