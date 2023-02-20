import * as Styled from "./Board.styles";

const EmptyCell = () => {
  return (
    <Styled.Cell>
      <Styled.Empty />
    </Styled.Cell>
  );
};

const FilledCell = ({ id }) => {
  return (
    <Styled.Cell>
      <Styled.Fill id={id} />
    </Styled.Cell>
  );
};

const Board = ({ grid, onClick }) => {
  return (
    <Styled.BoardCard size={grid.length} onClick={onClick}>
      {grid.map((row, r) => {
        return row.map((id, c) => {
          const key = `${r}_${c}`;
          if (id === 0) {
            return <EmptyCell key={key} />;
          } else {
            return <FilledCell key={key} id={id} />;
          }
        });
      })}
    </Styled.BoardCard>
  );
};

export default Board;
