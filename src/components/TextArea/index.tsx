'use client';

import { forwardRef, useEffect, useMemo, useRef, useState } from "react";
import * as S from "./style";

type TextAreaProps = {
  sentence: string,
};

const TextArea = forwardRef<HTMLElement, TextAreaProps>(({ sentence }, ref) => {
  const contentRef = useRef<HTMLSpanElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  const measureHeights = () => {
    const el = contentRef.current;
    const container = el?.closest('[data-text-container]') as HTMLElement;
    if (!el || !container) return;
    
    const styles = window.getComputedStyle(el);
    const mt = parseFloat(styles.marginTop || "0");
    const mb = parseFloat(styles.marginBottom || "0");
    const full = el.scrollHeight + mt + mb;
    
    // 컨테이너의 실제 높이를 기준으로 overflow 판단
    const containerHeight = container.clientHeight;
    const availableHeight = containerHeight - 2 * 0.75; // quota 이미지 높이 제외 (0.75rem * 2)
    console.log("full: ", full);
    console.log("availableHeight: ", availableHeight);
    setIsOverflowing(full > availableHeight);
  };

  useEffect(() => {
    console.log("isOverflowing: ", isOverflowing);
  }, [isOverflowing])

  useEffect(() => {
    setTimeout(() => {
      measureHeights();
    }, 100);
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

  return (<S.TextAreaWrapper>
    <S.TextContainer ref={ref} data-text-container style={{
    }}>
      <S.OpenQuotaWrap>
        <S.OpenQuota src="/quota_open.png" alt="Open Quota" />
      </S.OpenQuotaWrap>
        <S.Content ref={contentRef}>{sentence}</S.Content>
        {isOverflowing && (
          <S.FadeOverlay className="fade-overlay" style={{ opacity: overlayOpacity }} />
        )}
      <S.CloseQuotaWrap>
        <S.CloseQuota src="/quota_close.png" alt="Close Quota" />
      </S.CloseQuotaWrap>
    </S.TextContainer>
  </S.TextAreaWrapper>);
});

export default TextArea;