import styled from "styled-components";

const Container = styled.div``;

const Title = styled.div`
  font-weight: 600;
  margin-bottom: 10px;
`;

const Text = styled.div`
  color: #777;
`;

export default function Article({ title, content }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Text>{content}</Text>
    </Container>
  );
}
