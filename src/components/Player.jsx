import styled from "styled-components";
import Card from "./common/Card";

const PlayerCard = styled(Card)`
  width: 120px;
  height: 140px;
  padding-top: 32px;
  font-weight: bold;
`;

const Icon = styled.span`
  width: 50px;
  height: 50px;
  background-color: ${({ id }) => `var(--player${id}-color)`};
  position: absolute;
  border-radius: 50%;
  top: -20px;
  border: 3px solid var(--dark-color);
  border-bottom-width: 7px;
`;

const Name = styled.h3``;

const Score = styled.h1`
  font-weight: bold;
  font-size: 50px;
`;

const Player = ({ id }) => {
  return (
    <PlayerCard>
      <Icon id={id} />
      <Name>PLAYER {id}</Name>
      <Score>0</Score>
    </PlayerCard>
  );
};

export default Player;
