'use client';

import { forwardRef, useEffect, useMemo, useRef, useState } from "react";
import * as S from "./style";

type TextAreaProps = { 
  top_margin: number,
  sentence: string,
};

const TextArea = forwardRef<HTMLElement, TextAreaProps>(({ top_margin, sentence }, ref) => {
  const contentRef = useRef<HTMLSpanElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [lineHeightPx, setLineHeightPx] = useState<number>(0);
  const [contentFullHeight, setContentFullHeight] = useState<number>(0);

  const measureHeights = () => {
    const el = contentRef.current;
    if (!el) return;
    const styles = window.getComputedStyle(el);
    const lh = parseFloat(styles.lineHeight);
    const mt = parseFloat(styles.marginTop || "0");
    const mb = parseFloat(styles.marginBottom || "0");
    const full = el.scrollHeight + mt + mb;
    setLineHeightPx(lh);
    setContentFullHeight(full);
    const threeLines = lh * 3 + mt + mb;
    setIsOverflowing(full > threeLines + 1);
  };

  useEffect(() => {
    measureHeights();
  }, [sentence]);

  useEffect(() => {
    const onResize = () => measureHeights();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const overlayOpacity = useMemo(() => {
    if (!isOverflowing) return 0;
    const fadeRange = 30; // 스크롤 0~30% 구간에서 서서히 사라짐
    const v = 1 - Math.min(100, fadeRange) / fadeRange;
    return Math.max(0, Math.min(1, v));
  }, [isOverflowing]);

  return (
    <S.TextContainer ref={ref} style={{
      top: `calc((10% + ${top_margin}px + 1rem) + (100% - (10% + ${top_margin}px + 1rem) ) / 2)`,
      height: isOverflowing ? `calc(90% - ${top_margin}px - 1rem)` : 'auto'
    }}>
      <S.OpenQuota src="/quota_open.png" alt="Open Quota" />
      <S.TextContentWrap>
        <S.Content ref={contentRef}>{sentence}</S.Content>
        {isOverflowing && (
          <S.FadeOverlay className="fade-overlay" style={{ opacity: overlayOpacity }} />
        )}
      </S.TextContentWrap>
      <S.CloseQuota src="/quota_close.png" alt="Close Quota" />
    </S.TextContainer>
    
  );
});

export default TextArea;