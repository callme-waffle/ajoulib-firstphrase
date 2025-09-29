import { RefObject, useCallback, useEffect, useState } from "react";

export const useAutoScroll = (el_ref: RefObject<HTMLTableSectionElement | null>, run: boolean): [boolean] => {

  const [run_flag, setRunFlag] = useState<boolean>(false);
  const [is_scrolled, setIsScrolled] = useState<boolean>(false);

  const smoothScrollTo = useCallback((element: HTMLElement, scrollTo: number, duration: number) => {
    const startPosition = element.scrollTop;
    const distance = scrollTo - startPosition;
    let startTime: number = -100;

    // 애니메이션 루프 함수
    const animation = (currentTime: number) => {
        if (startTime === -100) {
          startTime = currentTime;
        }

        const timeElapsed = currentTime - startTime;
        const nextScrollPosition = easeInOutQuad(timeElapsed, startPosition, distance, duration);

        element.scrollTo(0, nextScrollPosition);

        // duration 동안 애니메이션을 계속 실행
        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }

    function easeInOutQuad(curr_time: number, begin: number, change: number, duration: number) {
        curr_time /= (duration / 2);
        
        if (curr_time < 1) 
          return (change / 2) * (curr_time * curr_time) + begin;

        curr_time--; // Normalize (0~1)
        return -change / 2 * (curr_time * (curr_time - 2) - 1) + begin;
    }

    // 애니메이션 시작
    requestAnimationFrame(animation);
  }, [])

  const initScroll = useCallback(() => {
    if (run_flag) return;
    setRunFlag(true);

    console.log("initScroll");

    setTimeout(() => {
      if (!el_ref.current) return;
      
      const parent = el_ref.current.parentElement;
      if (!parent) return;

      const full = parent.clientHeight * 1.5;
      const move_time = 1000;
      
      smoothScrollTo(parent, full, move_time);
      setTimeout(() => setIsScrolled(true), move_time);
    
    }, 100);
  }, [run_flag]);
  
  useEffect(() => {
    if (!run) return;
    initScroll();
  }, [run]);

  return [is_scrolled];
}