import { useCallback } from "react";
import { event } from "@/lib/gtag";

// styles
import * as S from "./style";
import { IconArrowBigLeftLine } from "@tabler/icons-react";

const PrevButton = ({visible, onClick}: {visible: boolean, onClick?: () => any}) => {

  const onLinkButtonClick = useCallback(() => {
    event("prev_sentence" as any, {});
    if (onClick) onClick();
  }, [onClick]);

  return <S.PrevButton isVisible={visible} onClick={onLinkButtonClick}>
    <IconArrowBigLeftLine color="#1361A7"/>
  </S.PrevButton>
};

export default PrevButton