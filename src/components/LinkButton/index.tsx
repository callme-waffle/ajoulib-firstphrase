import { useCallback } from "react";

// styles
import * as S from "./style";

const LinkButton = ({href}: {href: string}) => {

  const onLinkButtonClick = useCallback(() => {
    window.open(href);
  }, [href]);

  return <S.LinkButton 
    onClick={onLinkButtonClick}
  >책으로 이동</S.LinkButton>
};

export default LinkButton