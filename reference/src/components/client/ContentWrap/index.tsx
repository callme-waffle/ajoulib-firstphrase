import * as S from "./style";

import top_logo from "/ajoulib_logo_4x.png";
import bottom_logo from "/ajoulib_bottom_logo.png";
import reading_chito from "/ajoulib_reading_chito.png";
import TextArea from "../../server/TextArea";

// 서버 컴포넌트는 async 함수로 선언합니다
export default function ServerComponent() {
  return (
    <S.StyledSection>
      <S.TopLogo src={top_logo} alt="AjouLib Logo" />
      <S.PageTitle>오늘의 한 문장</S.PageTitle>
      <S.ScrollSection>
        <TextArea/>
      </S.ScrollSection>
      <S.DesignBackground/>
      <S.BottomLogo src={bottom_logo} alt="AjouLib Logo" />
      <S.CharacterImg src={reading_chito} alt="AjouLib Chito" />
    </S.StyledSection>
  )
} 