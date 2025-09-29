import { useState, useEffect, useRef, HTMLAttributes, useMemo, useCallback } from "react";

// style
import * as S from "./style";

// types
import { BookInfo } from "@/types";
import { useScrollState } from "@/hooks/useScrollState";

// components
import IntroArea from "@/components/IntroArea";
import TextArea from "@/components/TextArea";
import { useAutoScroll } from "@/hooks/useAutoScroll";

// interfaces
type ScrollAreaProps = {
  book_info: BookInfo | null;
  is_ready?: boolean;
  onScroll: (v: number) => void;
} & Omit<HTMLAttributes<HTMLTableSectionElement>, "onScroll">;

const ScrollArea: React.FC<ScrollAreaProps> = ({ book_info, onScroll, is_ready = false, ...props }) => {

  const cover_ref = useRef<HTMLTableSectionElement>(null);
  const introarea_ref = useRef<HTMLTableSectionElement>(null);
  const textarea_ref = useRef<HTMLTableSectionElement>(null);

  const [is_autoscroll_finished] = useAutoScroll(cover_ref, is_ready);
  
  const [total_scroll, setTotalScroll] = useState(0);
  const [scroll_rate, scroll_overflow, handleScrollRate] = useScrollState(!is_autoscroll_finished);
  
  useEffect(() => {
    // console.log("scroll", scroll_rate);
    onScroll(scroll_rate);
  }, [scroll_rate]);

  useEffect(() => {
    if (scroll_overflow <= 0) return;
    if (!cover_ref?.current) return;
    cover_ref.current.scrollTop = scroll_overflow;
  }, [scroll_overflow]);

  // window resize 이벤트에 대응하는 useEffect
  useEffect(() => {
    const handleResize = () => {
      if (textarea_ref.current && cover_ref.current) {
        const infoarea_height = introarea_ref.current?.clientHeight || 0;
        const cover_height = cover_ref.current.clientHeight;
        const textarea_height = textarea_ref.current.clientHeight;

        const calced_total_scroll = Math.max(
          (cover_height / 2) + infoarea_height + (textarea_height*3/2),
          cover_height * 1.5
        );
        
        setTotalScroll(calced_total_scroll);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [book_info, scroll_rate]);

  return <S.ScrollAreaWrap 
    onScroll={handleScrollRate} 
    style={{marginTop: `-${Math.min(scroll_rate/2, 30)}%`}}
    {...props}
  >
    <S.ScrollCover ref={cover_ref}>
      <IntroArea ref={introarea_ref}
        scroll_rate={scroll_rate} 
        info={book_info}
      />
      <TextArea ref={textarea_ref}
        top_margin={introarea_ref.current?.clientHeight || 0} 
        scroll_rate={scroll_rate} 
        sentence={book_info?.sentence || ""}
      />
    </S.ScrollCover>
    <S.FakeScrollArea style={{ height: `${total_scroll}px` }}/>
  </S.ScrollAreaWrap>
};

export default ScrollArea