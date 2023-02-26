import { useRef, useState } from "react";
const TIME_FOR_A_PLAYER_IN_SECONDS = 30;

export const useTimer = ({ onTimeout }) => {
  const timeRef = useRef(0);
  const [time, setTime] = useState(timeRef.current);
  const intervalRef = useRef();

  const resetTimer = () => {
    timeRef.current = TIME_FOR_A_PLAYER_IN_SECONDS;
    setTime(timeRef.current);
    const handler = setInterval(() => {
      const t = timeRef.current - 1;
      if (t < 0) {
        onTimeout();
        timeRef.current = TIME_FOR_A_PLAYER_IN_SECONDS;
      } else {
        timeRef.current = t;
      }
      setTime(timeRef.current);
      timeRef.current = t;
    }, 1000);
    intervalRef.current = handler;
  };

  const clearTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  return {
    time,
    resetTimer,
    clearTimer,
  };
};
