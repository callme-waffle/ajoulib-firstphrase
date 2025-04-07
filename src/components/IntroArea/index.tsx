import { useState, useEffect, useRef } from "react";

// style
import * as S from "./style";

// types
import { BookInfo } from "@/types";

// interfaces
type IntroAreaProps = {
  topRate: number,
  info: BookInfo | null
}

const IntroArea: React.FC<IntroAreaProps> = ({ topRate, info }) => {
  if (!info) return <></>;

  return <S.IntroAreaWrap style={{
    opacity: topRate / 100,
    transform: `translateY(calc(-100% + ${topRate*6/10}%))`
  }}>
    <h3>오늘의 책</h3>
    <S.BookTitleLoc>
      <h2>{info.title}</h2>
      <h3>{info.author}</h3>
    </S.BookTitleLoc>
    <S.BookLocSpec>
      <span>{info.location}</span>
      <span>{info.code}</span>
    </S.BookLocSpec>
  </S.IntroAreaWrap>
};

export default IntroArea