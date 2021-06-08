import styled from "styled-components";
import Layout from "../../components/Layout";
import Searchbar from "../../components/Searchbar";
import Post from "./Post";

const Section = styled.div`
  margin-bottom: 2em;
`;

const posts = [
  {
    title: "How often should i water my succulents?",
    content:
      "succulents should be watered at least once a week during their growingphase. Some people water more often than this.When watering succulents.",
  },
  {
    title: "How often should i water my succulents?",
    content:
      "succulents should be watered at least once a week during their growingphase. Some people water more often than this.When watering succulents.",
  },
  {
    title: "How often should i water my succulents?",
    content:
      "succulents should be watered at least once a week during their growingphase. Some people water more often than this.When watering succulents.",
  },
];

export default function Community() {
  return (
    <Layout>
      <Section>
        <Searchbar placeholder="Search for questions" />
      </Section>
      {posts.map((p, i) => (
        <Post key={i} post={p} />
      ))}
    </Layout>
  );
}
