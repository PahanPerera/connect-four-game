import styled from "styled-components";
import Button from "./common/Button";

const HeaderContainer = styled.header`
  height: 80px;
  display: flex;
  align-items: start;
  width: 100%;
`;

const Spacer = styled.div`
  flex: 1;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Button>MENU</Button>
      <Spacer />
      <Button>RESTART</Button>
    </HeaderContainer>
  );
};

export default Header;
