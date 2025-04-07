import styled from "styled-components";

export const ScrollAreaWrap = styled.section`
  width: 100%;
  
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

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-height: 760px) {
    margin-top: 0 !important;
  }
`;

export const FakeScrollArea = styled.div`
  width: 100%;
  height: calc(150%);
`;