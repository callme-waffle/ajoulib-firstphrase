import { useCallback } from "react";
import { event } from "@/lib/gtag";

// styles
import * as S from "./style";
import { IconArrowBigRightLine } from "@tabler/icons-react";

const NextButton = ({onClick}: {onClick?: () => any}) => {

  const onLinkButtonClick = useCallback(() => {
    event("next_sentence" as any, {});
    if (onClick) onClick();
  }, [onClick]);

  return <S.NextButton onClick={onLinkButtonClick}>
    <IconArrowBigRightLine color="#1361A7"/>
  </S.NextButton>
};

export default NextButton