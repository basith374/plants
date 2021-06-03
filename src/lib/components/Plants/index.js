import styled from "styled-components";
import Item from "./Item";

const Container = styled.div`
  padding: 3em 0 8em;
`

const Title = styled.div`
  margin-bottom: 2em;
`

export default function Plants() {
  return <Container>
    <Title>Plants near you</Title>
    <div>
      <Item image="/plant1.png" />
      <Item image="/plant2.png" />
      <Item image="/plant3.png" />
    </div>
  </Container>
}