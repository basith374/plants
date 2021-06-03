import styled from "styled-components";
import Item from "./Item";

const Container = styled.div`
  padding: 3em 0 8em;
`

const Title = styled.div`
  margin-bottom: 2em;
  font-weight: 600;
`

export default function Plants() {
  return <Container>
    <Title>Plants near you</Title>
    <div>
      <Item image="http://assets.basithkunimal.com/plant1.png" />
      <Item image="http://assets.basithkunimal.com/plant2.png" />
      <Item image="http://assets.basithkunimal.com/plant3.png" />
    </div>
  </Container>
}