'use client';
import { useMemo, useCallback, useState, useEffect } from "react";

// styles
import * as S from '@/style/App.style';

// hooks
import { useBookInfo } from "@/hooks/useBookInfo";
import { useDelayState } from "@/hooks/useDelayState";

// components
import ScrollArea from "@/components/ScrollArea";
import StyleElements from "@/components/StyleElements";
import LinkButton from "@/components/LinkButton";
import * as api from "@/api/request";
import NextButton from "@/components/NextButton";
import PrevButton from "@/components/PrevButton";

export default function Home() {

  const [
    {
      loading, book_info,
      prev_remain
    }, 
    { moveForward, moveBackward }
  ] = useBookInfo();
  const [book_url, setBookURL] = useState<string | null>(null);

  const delay_loading = useDelayState(loading, 200);
  const [scroll, setScroll] = useState(0);

  const updateBookURL = useCallback(async (code: string) => {
    const url_result = await api.getBookURL(code);
    if (url_result.result) {
      setBookURL(url_result.url);
    } else {
      alert("도서관 DB조회 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.");
      setBookURL(null);
    }
  }, []);

  useEffect(() => {
    console.log("book_info", book_info);
    if (!book_info?.code) return;
    updateBookURL(book_info?.code);
  }, [book_info]);

  const button_link = useMemo(() => {
    if (!book_url) return "";
    return book_url;
  }, [book_url]);
  
  return <S.GlobalSection>
    <S.AppSection>
      <S.StyledSection>
        <S.TopLogo src="/ajoulib_logo_4x.png" alt="AjouLib Logo" />
        <S.LoadingCharacterContainer className={!loading ? "fading" : ""}>
          <S.LoadingCharacter src="/ajoulib_reading_chito.png" alt="AjouLib Chito"/>
        </S.LoadingCharacterContainer>
        <ScrollArea 
          book_info={!delay_loading ? book_info : null} onScroll={setScroll}
          className={!loading ? "visibling" : ""}
        />
        <S.ButtonSection>
          <PrevButton visible={prev_remain > 1} onClick={() => moveBackward()}/>
          <LinkButton href={button_link}/>
          <NextButton onClick={() => (!loading && moveForward())}/>
        </S.ButtonSection>
        <StyleElements scroll={scroll}/>
      </S.StyledSection>
    </S.AppSection>
  </S.GlobalSection>;
}