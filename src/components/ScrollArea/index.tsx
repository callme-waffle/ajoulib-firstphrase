import { useState, useEffect, useRef } from "react";

// style
import * as S from "./style";

// types
import { BookInfo } from "@/types";
import { useScrollState } from "@/hooks/useScrollState";

// components
import IntroArea from "@/components/IntroArea";
import TextArea from "@/components/TextArea";

// interfaces
type ScrollAreaProps = {
  book_info: BookInfo | null;
  onScroll: (v: number) => void;
}

const ScrollArea: React.FC<ScrollAreaProps> = ({ book_info, onScroll }) => {
  
  const [scroll, handleScroll] = useScrollState();
  
  useEffect(() => {
    onScroll(scroll);
  }, [scroll]);

  return <S.ScrollAreaWrap 
    onScroll={handleScroll} 
    style={{marginTop: `-${Math.min(scroll/2, 30)}%`}}
  >
    <IntroArea topRate={scroll} info={book_info}/>
    <TextArea topRate={scroll} sentence={book_info?.sentence || ""}/>
    <S.FakeScrollArea/>
  </S.ScrollAreaWrap>
};

export default ScrollArea