import styled from "styled-components";

export const ScrollAreaWrap = styled.section`
  width: 100%;
  position: relative;
  
  flex: 1;
  height: auto;

  overflow-y: auto;

  opacity: 0;
  transform: scale(0.9);
  transition: opacity .2s cubic-bezier(0, 1, 1, 1);

  &.visibling {
    opacity: 1;
    transform: scale(1);
  }

  @media (min-height: 760px) {
    margin-top: 0 !important;
  }
`;

export const ScrollCover = styled.section`
  width: 100%;
  height: 100%;

  position: sticky;
  top: 0;
  left: 0;

  overflow-y: hidden;


  &::-webkit-scrollbar {
    display: none;
  }
`;

export const FakeScrollArea = styled.div`
  width: 100%;
  height: 150%;
  z-index: 10000;
`;