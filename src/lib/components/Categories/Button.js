import styled from "styled-components";

const Image = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background: ${({ active }) => (active ? "#306060" : "#fff")};
  margin: 0 auto 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 24px;
  }
`;

const Text = styled.div`
  color: #777;
`

const Container = styled.div`
  flex: 1;
  text-align: center;
  padding: 10px;
  cursor: pointer;
`

export default function Button({ children, title, active, onClick }) {
  return (
    <Container onClick={onClick}>
      <Image active={active}>{children}</Image>
      <Text>{title}</Text>
    </Container>
  );
}
