import { useRef, HTMLAttributes } from "react";

// style
import * as S from "./style";

// types
import { BookInfo } from "@/types";

// components
import IntroArea from "@/components/IntroArea";
import TextArea from "@/components/TextArea";

// interfaces
type ScrollAreaProps = {
  book_info: BookInfo | null;
  onScroll: (v: number) => void;
} & Omit<HTMLAttributes<HTMLTableSectionElement>, "onScroll">;

const ScrollArea: React.FC<ScrollAreaProps> = ({ book_info, onScroll, ...props }) => {

  const cover_ref = useRef<HTMLTableSectionElement>(null);
  const introarea_ref = useRef<HTMLTableSectionElement>(null);
  const textarea_ref = useRef<HTMLTableSectionElement>(null);

  return <S.ScrollAreaWrap {...props}>
    <S.ScrollCover ref={cover_ref}>
      <IntroArea ref={introarea_ref}
        info={book_info}
      />
      <TextArea ref={textarea_ref}
        sentence={book_info?.sentence || ""}
      />
    </S.ScrollCover>
  </S.ScrollAreaWrap>
};

export default ScrollArea