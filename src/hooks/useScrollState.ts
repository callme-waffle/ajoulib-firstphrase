import { useState } from "react";

export const useScrollState = (): [number, (e: React.UIEvent<HTMLElement>) => void] => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const percent = (e.currentTarget.scrollTop / (e.currentTarget.scrollHeight - e.currentTarget.clientHeight)) * 100;
    setScroll(percent);
  }

  return [scroll, handleScroll];
}