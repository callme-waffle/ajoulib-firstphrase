'use client';
import { useMemo, useCallback, useState } from "react";

// styles
import * as S from '@/style/App.style';

// hooks
import { useBookInfo } from "@/hooks/useBookInfo";

// components
import ScrollArea from "@/components/ScrollArea";
import PageTitleArea from "@/components/PageTitleArea";
import StyleElements from "@/components/StyleElements";
import LinkButton from "@/components/LinkButton";

export default function Home() {

  const [loading, error, book_info] = useBookInfo();
  const [scroll, setScroll] = useState(0);

  const button_link = useMemo(() => {
    return `https://library.ajou.ac.kr/#/total-search?keyword=${book_info?.code}`;
  }, [book_info]);
  
  return <S.GlobalSection>
    <S.AppSection>
      <S.StyledSection>
        <S.TopLogo src="/ajoulib_logo_4x.png" alt="AjouLib Logo" />
        <PageTitleArea scroll={scroll}/>
        <ScrollArea book_info={book_info} onScroll={setScroll}/>
        <LinkButton scroll={scroll} href={button_link}/>
        <StyleElements scroll={scroll}/>
      </S.StyledSection>
    </S.AppSection>
  </S.GlobalSection>;
}