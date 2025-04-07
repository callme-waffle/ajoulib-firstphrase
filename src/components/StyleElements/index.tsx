// styles
import * as S from "./style";

const StyleElements = ({scroll}: {scroll: number}) => {
  return <>
    <S.DesignBackground style={{transform: `translate(-50%, calc(-1*${scroll*1/10}%))`}}/>
    <S.BottomLogo src="/ajoulib_bottom_logo.png" alt="AjouLib Logo" />
    <S.CharacterImg src="/ajoulib_reading_chito.png" alt="AjouLib Chito" />
  </>;
};

export default StyleElements;