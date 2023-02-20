import styled from "styled-components";

export const Layout = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 100vh;
  &:after {
    position: absolute;
    content: "";
    background-color: var(--bg-dark-color);
    height: 200px;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    border-top-right-radius: 70px;
    border-top-left-radius: 70px;
  }
`;
export const Body = styled.section`
  display: flex;
  gap: 60px;
  align-items: center;
`;

export const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TimerContainer = styled.div`
  margin-top: -40px; ;
`;

export const PlayerContainer = styled.div`
  margin-top: -100px; ;
`;
