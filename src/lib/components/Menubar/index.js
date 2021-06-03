import styled from "styled-components";
import Community from "./buttons/community";
import Leaf from "./buttons/leaf";
import Plant from "./buttons/plant";

const Container = styled.div`
  padding: 0 1em 1em;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
`;

const Buttons = styled.div`
  background: #242424;
  height: 60px;
  border-radius: 20px;
  display: flex;
`;

const Button = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  svg {
    width: 20px;
  }
`;

export default function Menubar({ page, setPage }) {
  return (
    <Container>
      <Buttons>
        <Button onClick={() => setPage(0)}>
          <Plant active={page === 0} />
        </Button>
        <Button onClick={() => setPage(1)}>
          <Leaf active={page === 1} />
        </Button>
        <Button onClick={() => setPage(2)}>
          <Community active={page === 2} />
        </Button>
      </Buttons>
    </Container>
  );
}
