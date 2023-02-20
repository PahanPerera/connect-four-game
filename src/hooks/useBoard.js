import produce from "immer";
import { useState } from "react";

const createGrid = (size) =>
  new Array(size).fill(0).map(() => {
    return new Array(size).fill(0);
  });

let currentPlayerIdValue = 1;
let nextFreeCellId = 0;

export const useBoard = ({ size }) => {
  const [grid, setGrid] = useState(createGrid(size));
  const [currentPlayerId, setCurrentPlayerId] = useState(currentPlayerIdValue);
  const play = () => {
    if (nextFreeCellId >= size * size) return;
    const updatedGrid = produce(grid, (draft) => {
      draft[size - 1 - Math.floor(nextFreeCellId / size)][
        nextFreeCellId % size
      ] = currentPlayerId;
    });
    currentPlayerIdValue = currentPlayerIdValue == 1 ? 2 : 1;
    nextFreeCellId++;
    setGrid(updatedGrid);
    setCurrentPlayerId(currentPlayerIdValue);
  };

  return {
    grid,
    currentPlayerId,
    play,
  };
};
