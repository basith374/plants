import styled from "styled-components";
import { Container as BaseContainer, TextArea as BaseTextarea } from "../../components/Input";

const Container = styled(BaseContainer)`
  padding: 0;
  overflow: hidden;
  margin-bottom: 1em;
`

export default function Textarea({ placeholder }) {
  return <Container>
    <BaseTextarea placeholder={placeholder} />
  </Container>
}