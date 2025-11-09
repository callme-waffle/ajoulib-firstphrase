import { useCallback } from "react";

// styles
import * as S from "./style";
import { IconArrowBigRightLine } from "@tabler/icons-react";

const NextButton = ({onClick}: {onClick?: () => any}) => {

  const onLinkButtonClick = useCallback(() => {
    if (onClick) onClick();
  }, [onClick]);

  return <S.NextButton onClick={onLinkButtonClick}>
    <IconArrowBigRightLine color="#1361A7"/>
  </S.NextButton>
};

export default NextButton