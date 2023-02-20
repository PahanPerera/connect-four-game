import styled from "styled-components";
import Card from "../common/Card";

export const BoardCard = styled(Card)`
  --cell-size: 56px;
  --cell-gap: 12px;
  --cell-count: ${({ size }) => size};
  display: grid;
  padding: var(--cell-gap);
  gap: var(--cell-gap);
  padding-bottom: 50px;
  grid-template-columns: repeat(var(--cell-count), 1fr);
`;

export const Cell = styled.div`
  width: var(--cell-size);
  height: var(--cell-size);
  border-radius: 50%;
  border: 3px solid var(--dark-color);
`;

export const Empty = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: var(--bg-color);
  border-top-width: 8px;
`;

export const Fill = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${({ id }) => `var(--player${id}-color)`};
  border-top-color: ${({ id }) => `var(--player${id}-dark-color)`};
  border-top-width: 6px;
`;
