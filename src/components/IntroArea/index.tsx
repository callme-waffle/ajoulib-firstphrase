import { useState, useEffect, useRef, forwardRef, RefObject } from "react";

// style
import * as S from "./style";

// types
import { BookInfo } from "@/types";

// interfaces
type IntroAreaProps = {
  info: BookInfo | null
}

const IntroArea = forwardRef<HTMLElement, IntroAreaProps>(({ info }, ref) => {

  if (!info) return <></>;

  return <S.IntroAreaWrap ref={ref}>
    <S.BookTitleLoc>
      <h2>{info.title}</h2>
      <h3>{info.author}{info.translator ? ` | ${info.translator} 역` : ""}</h3>
    </S.BookTitleLoc>
    <S.BookLocSpec>
      <span>{info.publisher}</span>
    </S.BookLocSpec>
  </S.IntroAreaWrap>
});

export default IntroArea