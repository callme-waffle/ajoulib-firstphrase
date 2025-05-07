import { useState, useEffect, useRef, forwardRef, RefObject } from "react";

// style
import * as S from "./style";

// types
import { BookInfo } from "@/types";

// interfaces
type IntroAreaProps = {
  scroll_rate: number,
  info: BookInfo | null
}

const IntroArea = forwardRef<HTMLElement, IntroAreaProps>(({ scroll_rate, info }, ref) => {

  if (!info) return <></>;

  return <S.IntroAreaWrap ref={ref} style={{
    opacity: `${scroll_rate/100}`,
    top: `calc(${-2 * (100-scroll_rate) / 100}rem)`
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
});

export default IntroArea