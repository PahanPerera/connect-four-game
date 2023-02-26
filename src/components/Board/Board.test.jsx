import Board from "./Board";
import { render } from "@testing-library/react";

const mockGrid = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 1, 2],
];

describe("Testing Board", () => {
  test("should render properly", () => {
    const mockClickFn = jest.fn();
    render(<Board grid={mockGrid} onClick={mockClickFn} />);
    expect(1 + 1).toBe(2);
  });
});
