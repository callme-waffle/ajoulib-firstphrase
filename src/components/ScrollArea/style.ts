import styled from "styled-components";

export const ScrollAreaWrap = styled.section`
  width: 100%;
  
  flex: 1;
  height: auto;

  overflow-y: auto;

  @media (min-height: 760px) {
    margin-top: 0 !important;
  }
`;

export const FakeScrollArea = styled.div`
  width: 100%;
  height: calc(150%);
`;