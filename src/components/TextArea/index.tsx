'use client';

import { forwardRef } from "react";
import * as S from "./style";

type TextAreaProps = { 
  top_margin: number,
  scroll_rate: number, 
  sentence: string,
};

const TextArea = forwardRef<HTMLElement, TextAreaProps>(({ top_margin, scroll_rate, sentence }, ref) => {
  return (
    <S.TextContainer ref={ref} style={{
      // top: `calc(${ (top_margin + 10) * scroll_rate / 100 }px + ${50*(100-(scroll_rate/2))/100}%)`
      top: `calc(${ (top_margin + 36) * scroll_rate / 100 }px + ${50*(100-(scroll_rate))/100}%)`,
      transform: `translate(-50%, ${-50 * (100-scroll_rate) / 100}%)`
    }}>
      <S.OpenQuota src="/quota_open.png" alt="Open Quota" />
      <S.Content>{sentence}</S.Content>
      <S.CloseQuota src="/quota_close.png" alt="Close Quota" />
    </S.TextContainer>
    
  );
});

export default TextArea;