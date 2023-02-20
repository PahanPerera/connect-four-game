import styled from "styled-components";

const Card = styled.div`
  position: relative;
  --border-radius: 16px;
  background: var(--light-color);
  border: 3px solid var(--dark-color);
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  &:after {
    position: absolute;
    content: "";
    background-color: var(--dark-color);
    inset: 0;
    border-radius: var(--border-radius);
    z-index: -1;
    transform: translateY(12px);
  }
`;

export default Card;
