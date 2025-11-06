import { useCallback } from "react";

// styles
import * as S from "./style";
import { IconArrowBigRightLine } from "@tabler/icons-react";

const LinkButton = ({onClick}: {onClick?: () => any}) => {

  const onLinkButtonClick = useCallback(() => {
    if (onClick) onClick();
  }, [onClick]);

  return <S.LinkButton onClick={onLinkButtonClick}>
    <IconArrowBigRightLine color="#1361A7"/>
  </S.LinkButton>
};

export default LinkButton