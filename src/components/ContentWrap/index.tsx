import * as S from "./style";

import TextArea from "../TextArea";
import ScrollArea from "../ScrollArea";
import { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { BookInfo } from "@/types";
import IntroArea from "../IntroArea";
export const ContentWrap = () => {

  const [book_info, setBookInfo] = useState<BookInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSentence = async () => {
      try {
        const response = await axios.get('/api/sentence');
        const {result, data, error} = response?.data;
        if (!result) throw new Error(error);
        
        setBookInfo(data); // 첫 번째 문장만 표시
        setLoading(false);
      } catch (err) {
        setError('문장을 불러오는데 실패했습니다.');
        setLoading(false);
        console.error('Error fetching sentence:', err);
      }
    };

    fetchSentence();
  }, []);

  const [scroll, setScroll] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const percent = (e.currentTarget.scrollTop / (e.currentTarget.scrollHeight - e.currentTarget.clientHeight)) * 100;
    console.log(percent);
    setScroll(percent);
  }

  const date_text = useMemo(() => {
    const now = new Date();
    return `${now.getFullYear()}.${now.getMonth()}.${now.getDate()}.`;
  }, []);

  const onLinkButtonClick = useCallback(() => {
    if (scroll < 50) return;
    window.open(`https://library.ajou.ac.kr/#/total-search?keyword=${book_info?.code}`);
  }, [book_info, scroll]);

  return (
    <S.StyledSection>
      <S.TopLogo src="/ajoulib_logo_4x.png" alt="AjouLib Logo" />
      <S.PageTitle style={{
        opacity: (100-scroll)/100
      }}>오늘의 한 문장</S.PageTitle>
      <S.DateText style={{
        opacity: (100-scroll)/100
      }}>{date_text}</S.DateText>
      <S.ScrollSection onScroll={handleScroll} style={{
        marginTop: `-${Math.min(scroll/2, 30)}%`
      }}>
        <IntroArea topRate={scroll} info={book_info}/>
        <TextArea topRate={scroll} sentence={book_info?.sentence || ""}/>
        <ScrollArea/>
      </S.ScrollSection>
      <S.LinkButton style={{
        opacity: scroll/100
      }} onClick={onLinkButtonClick}>도서관에서 이어보기</S.LinkButton>
      <S.DesignBackground style={{
        transform: `translate(-50%, calc(-1*${scroll*1/10}%))`
      }}/>
      <S.BottomLogo src="/ajoulib_bottom_logo.png" alt="AjouLib Logo" />
      <S.CharacterImg src="/ajoulib_reading_chito.png" alt="AjouLib Chito" />
    </S.StyledSection>
  )
} 