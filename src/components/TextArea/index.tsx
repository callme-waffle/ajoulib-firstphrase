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

  // 3줄 높이에서 시작해 전체 높이로 확장되는 가시 영역 높이(px)
  const visibleHeightPx = useMemo(() => {
    if (!contentRef.current) return undefined;
    const el = contentRef.current;
    const styles = window.getComputedStyle(el);
    const mt = parseFloat(styles.marginTop || "0");
    const mb = parseFloat(styles.marginBottom || "0");
    const threeLines = lineHeightPx * 3 + mt + mb;
    const full = contentFullHeight || el.scrollHeight + mt + mb;
    if (!isOverflowing) return full;
    const expandRange = 30; // 0~30%에서 확장 완료
    const p = Math.min(scroll_rate, expandRange) / expandRange; // 0~1
    return Math.round(threeLines + (full - threeLines) * p);
  }, [lineHeightPx, contentFullHeight, isOverflowing, scroll_rate]);

  return (
    <S.TextContainer ref={ref} style={{
      top: `calc(${ (top_margin + 36) * scroll_rate / 100 }px + ${50*(100-(scroll_rate))/100}%)`,
      transform: `translate(-50%, ${-50 * (100-scroll_rate) / 100}%)`
    }}>
      <S.OpenQuota src="/quota_open.png" alt="Open Quota" />
      <S.TextContentWrap style={{ height: visibleHeightPx ? `${visibleHeightPx}px` : undefined, overflow: 'hidden' }}>
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