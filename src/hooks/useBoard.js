import produce from "immer";
import { useState } from "react";

const createGrid = (size) =>
  new Array(size).fill(0).map(() => {
    return new Array(size).fill(0);
  });

const updateGrid = (col, playerId) => {
  return produce((draft) => {
    for (let r = draft.length - 1; r >= 0; r--) {
      const row = draft[r];
      if (row[col] === 0) {
        row[col] = playerId;
        return;
      }
    }
  });
};

export const useBoard = ({ size }) => {
  const [grid, setGrid] = useState(createGrid(size));
  const [currentPlayerId, setCurrentPlayerId] = useState(1);

  const swapPlayer = () => {
    setCurrentPlayerId(currentPlayerId === 1 ? 2 : 1);
  };

  const play = (col, playerId) => {
    setGrid(updateGrid(col, playerId));
    setCurrentPlayerId(currentPlayerId === 1 ? 2 : 1);
  };

  return {
    grid,
    currentPlayerId,
    swapPlayer,
    play,
  };
};
