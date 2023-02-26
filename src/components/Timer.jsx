import { useEffect } from "react";
import styled from "styled-components";
import { useTimer } from "../hooks/useTimer";
import Card from "./common/Card";

const TimerCard = styled(Card)`
  width: 160px;
  height: 100px;
  background-color: ${({ id }) => `var(--player${id}-color)`};
  font-weight: bold;
  color: var(--light-color);
`;

const Description = styled.p`
  font-size: 12px;
  margin-bottom: 8px;
`;
const Time = styled.h1`
  font-size: 40px;
`;

const Timer = ({ currentPlayerId, onTimeout }) => {
  const { time, resetTimer, clearTimer } = useTimer({
    onTimeout,
  });

  useEffect(() => {
    resetTimer();
    return () => {
      clearTimer();
    };
  }, [currentPlayerId]);

  return (
    <TimerCard id={currentPlayerId}>
      <Description>Player {currentPlayerId}'s Turn</Description>
      <Time>
        {time}
        <span style={{ fontSize: "28px" }}>s</span>
      </Time>
    </TimerCard>
  );
};

export default Timer;
