import Board from "./components/Board/Board";
import Player from "./components/Player";
import Timer from "./components/Timer";
import Header from "./components/Header";
import * as Styled from "./App.styles";
import { useBoard } from "./hooks/useBoard";

function App() {
  const { grid, currentPlayerId, play } = useBoard({ size: 7 });

  return (
    <Styled.Layout>
      <Styled.Body>
        <Styled.PlayerContainer>
          <Player id={"1"} />
        </Styled.PlayerContainer>
        <Styled.BoardContainer>
          <Header />
          <Board grid={grid} onClick={() => play()} />
          <Styled.TimerContainer>
            <Timer currentPlayerId={currentPlayerId} />
          </Styled.TimerContainer>
        </Styled.BoardContainer>
        <Styled.PlayerContainer>
          <Player id={"2"} />
        </Styled.PlayerContainer>
      </Styled.Body>
    </Styled.Layout>
  );
}

export default App;
