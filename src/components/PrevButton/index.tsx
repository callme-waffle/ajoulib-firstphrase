import { useCallback } from "react";

// styles
import * as S from "./style";
import { IconArrowBigLeftLine } from "@tabler/icons-react";

const PrevButton = ({visible, onClick}: {visible: boolean, onClick?: () => any}) => {

  const onLinkButtonClick = useCallback(() => {
    if (onClick) onClick();
  }, [onClick]);

  return <S.PrevButton isVisible={visible} onClick={onLinkButtonClick}>
    <IconArrowBigLeftLine color="#1361A7"/>
  </S.PrevButton>
};

export default PrevButton