import { useHistory } from "react-router";
import styled from "styled-components";
import Item from "./Item";

const Container = styled.div`
  padding: 3em 0 8em;
`;

const Title = styled.div`
  margin-bottom: 2em;
  font-weight: 600;
`;

const items = [
  "http://assets.basithkunimal.com/plant1.png",
  "http://assets.basithkunimal.com/plant2.png",
  "http://assets.basithkunimal.com/plant3.png",
];

export default function Plants() {
  const history = useHistory();
  return (
    <Container>
      <Title>Plants near you</Title>
      <div>
        {items.map((i) => (
          <Item key={i} image={i} onClick={() => history.push("/plant")} />
        ))}
      </div>
    </Container>
  );
}
