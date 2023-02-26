import * as Styled from "./Board.styles";

const EmptyCell = ({ col }) => {
  return (
    <Styled.Cell>
      <Styled.Empty data-col={col} />
    </Styled.Cell>
  );
};

const FilledCell = ({ id, col }) => {
  return (
    <Styled.Cell>
      <Styled.Fill id={id} data-col={col} />
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
            return <EmptyCell key={key} col={c} />;
          } else {
            return <FilledCell key={key} id={id} col={c} />;
          }
        });
      })}
    </Styled.BoardCard>
  );
};

export default Board;
