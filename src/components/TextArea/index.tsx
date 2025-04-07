'use client';

import * as S from "./style";

export default function TextArea({ topRate, sentence }: { topRate: number, sentence: string }) {
  return (
    <S.TextContainer style={{
      transform: `translateY(calc(-50% + ${topRate*6/10}%))`
    }}>
      <S.OpenQuota src="/quota_open.png" alt="Open Quota" />
      <S.Content>{sentence}</S.Content>
      <S.CloseQuota src="/quota_close.png" alt="Close Quota" />
    </S.TextContainer>
  );
} 