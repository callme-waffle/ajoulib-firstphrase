import { useCallback } from "react";

// styles
import * as S from "./style";
import { IconReload } from "@tabler/icons-react";

const LinkButton = ({onClick}: {onClick?: () => any}) => {

  const onLinkButtonClick = useCallback(() => {
    if (onClick) onClick();
  }, [onClick]);

  return <S.LinkButton onClick={onLinkButtonClick}>
    <IconReload color="#1361A7"/>
  </S.LinkButton>
};

export default LinkButton