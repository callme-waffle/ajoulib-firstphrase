import { useMemo } from "react";

// styles
import * as S from "./style";

const PageTitleArea = ({ scroll }: { scroll: number }) => {

  const date_text = useMemo(() => {
    const now = new Date();
    return `${now.getFullYear()}. ${now.getMonth()+1}. ${now.getDate()}.`;
  }, []);

  const text_opacity = useMemo(() => {
    return (100-scroll)/100;
  }, [scroll]);

  return <S.PageTitleArea>
    <S.PageTitle style={{opacity: text_opacity}}>오늘의 한 문장</S.PageTitle>
    <S.DateText style={{opacity: text_opacity}}>{date_text}</S.DateText>
  </S.PageTitleArea>
} 

export default PageTitleArea;