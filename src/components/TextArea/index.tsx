'use client';

import { forwardRef, useEffect, useMemo, useRef, useState } from "react";
import * as S from "./style";

type TextAreaProps = { 
  top_margin: number,
  scroll_rate: number, 
  sentence: string,
};

const TextArea = forwardRef<HTMLElement, TextAreaProps>(({ top_margin, scroll_rate, sentence }, ref) => {
  const contentRef = useRef<HTMLSpanElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    // 실제 라인 높이를 기준으로 3줄 초과 여부 판정
    const styles = window.getComputedStyle(el);
    const lineHeightPx = parseFloat(styles.lineHeight);
    const threeLines = lineHeightPx * 3;
    const overflowing = el.scrollHeight > threeLines + 1; // 여유 오차
    setIsOverflowing(overflowing);
  }, [sentence]);

  const overlayOpacity = useMemo(() => {
    if (!isOverflowing) return 0;
    const fadeRange = 30; // 스크롤 0~30% 구간에서 서서히 사라짐
    const v = 1 - Math.min(scroll_rate, fadeRange) / fadeRange;
    return Math.max(0, Math.min(1, v));
  }, [scroll_rate, isOverflowing]);

  // 오버플로 시 약간 아래로 내려 보이도록 오프셋 적용 (최대 0.6rem)
  const overflowYOffset = useMemo(() => {
    if (!isOverflowing) return 0;
    const maxOffsetRem = 30; // 시각적 보정값
    const fadeRange = 30;
    const t = 1 - Math.min(scroll_rate, fadeRange) / fadeRange; // 0~1
    return t * maxOffsetRem;
  }, [scroll_rate, isOverflowing]);

  return (
    <S.TextContainer ref={ref} style={{
      top: `calc(${ (top_margin + 36) * scroll_rate / 100 }px + ${50*(100-(scroll_rate))/100}%)`,
      transform: `translate(-50%, ${-50 * (100-scroll_rate) / 100}%)`
    }}>
      <S.OpenQuota src="/quota_open.png" alt="Open Quota" />
      <S.TextContentWrap style={{ transform: `translateY(${overflowYOffset}%)` }}>
        <S.Content ref={contentRef}>{sentence}</S.Content>
        {isOverflowing && (
          <S.FadeOverlay style={{ opacity: overlayOpacity }} />
        )}
      </S.TextContentWrap>
      <S.CloseQuota src="/quota_close.png" alt="Close Quota" />
    </S.TextContainer>
    
  );
});

export default TextArea;