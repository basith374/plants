import styled from "styled-components";
import Article from "../../components/Article";
import UserInfo from "../../components/UserInfo";

const Container = styled.div`
  background: #fff;
  border-radius: 2em;
  padding: 2em;
  margin-bottom: 2em;
`;

const Section = styled.div`
  margin-bottom: 1.5em;
`

export default function Post({ post }) {
  const { title, content } = post;
  return (
    <Container>
      <Section>
        <UserInfo />
      </Section>
      <Article title={title} content={content} />
    </Container>
  );
}
