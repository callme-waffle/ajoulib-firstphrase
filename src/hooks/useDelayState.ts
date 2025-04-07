import { useEffect } from "react";

import { useState } from "react";

export const useDelayState = (initialState: any, delay: number) => {
  const [state, setState] = useState(initialState);
  useEffect(() => {
    setTimeout(() => setState(initialState), delay);
  }, [initialState, delay]);
  return state;
};