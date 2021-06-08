import styled from "styled-components";
import { Container as SimpleContainer, Input as SimpleInput } from "../../components/Input";

const Container = styled(SimpleContainer)`
  margin-bottom: 1em;
`

export default function Input({ placeholder, children }) {
  return (
    <Container>
      <SimpleInput placeholder={placeholder} /> {children}
    </Container>
  );
}
