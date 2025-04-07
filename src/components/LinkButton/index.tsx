import { useCallback } from "react";

// styles
import * as S from "./style";

const LinkButton = ({scroll, href}: {scroll: number, href: string}) => {

  const onLinkButtonClick = useCallback(() => {
    if (scroll < 50) return;
    window.open(href);
  }, [href, scroll]);

  return <S.LinkButton 
    style={{opacity: scroll/100}}
    onClick={onLinkButtonClick}
  >도서관에서 이어보기</S.LinkButton>
};

export default LinkButton