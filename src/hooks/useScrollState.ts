import { useState } from "react";

export const useScrollState = (): [number, number, (e: React.UIEvent<HTMLElement>) => void] => {
  const [scroll_overflow, setScrollOverflow] = useState(0);
  const [scroll_percent, setScrollPercent] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const full_scroll = e.currentTarget.clientHeight * 1.5;
    const percent = (e.currentTarget.scrollTop / full_scroll) * 100;
    setScrollPercent(Math.min(percent, 100));
    setScrollOverflow(Math.max(0, e.currentTarget.scrollTop - full_scroll));
  }

  return [scroll_percent, scroll_overflow, handleScroll];
}