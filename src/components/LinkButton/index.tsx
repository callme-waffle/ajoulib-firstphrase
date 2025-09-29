import { useCallback } from "react";

// styles
import * as S from "./style";

const LinkButton = ({href}: {href: string}) => {

  const onLinkButtonClick = useCallback(() => {
    window.open(href);
  }, [href]);

  return <S.LinkButton 
    onClick={onLinkButtonClick}
  >도서관에서 이어보기</S.LinkButton>
};

export default LinkButton