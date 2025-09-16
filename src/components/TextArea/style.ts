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

  & .fade-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;

    @media (max-height: 760px) {
      /* 상단 3줄은 완전 투명, 그 아래부터 불투명으로 전환 */
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0) 0,
        rgba(255, 255, 255, 0) calc(1.5rem * 1.7 * 3),
        rgba(255, 255, 255, 1) calc(1.5rem * 1.7 * 3 + 2rem),
        rgba(255, 255, 255, 1) 100%
      );
    }
    /* 상단 3줄은 완전 투명, 그 아래부터 불투명으로 전환 */
    background: linear-gradient(
      to bottom,
      rgba(224,231,237,0) 0,
      rgba(224,231,237,0) calc(1.5rem * 1.7 * 3),
      rgba(224,231,237,1) calc(1.5rem * 1.7 * 3 + 2rem),
      rgba(224,231,237,1) 100%
    );
    transition: opacity .25s ease;
  }
`;

export const TextContentWrap = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;

export const Content = styled.span`
  /* font-family: "Nanum Pen Script", sans-serif; */
  font-family: var(--font-taom), sans-serif;

  width: calc(100% - 3rem);
  display: block;

  font-size: 1.5rem;
  line-height: 1.5;
  /* line-height: 1.25; */
  line-height: 1.7;
  color: #333;
  word-break: keep-all;

  margin: 1.5rem auto;
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

export const FadeOverlay = styled.div``;