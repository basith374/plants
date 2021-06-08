import styled from "styled-components";
import { PlantText } from "../Plants/Item";
import UserInfo from "../UserInfo";
import Reply from "./Reply";

const Container = styled.div`
  overflow-y: scroll;
  padding-bottom: 5em;
  border-radius: 2em 2em 0 0;
`;

const ImageContainer = styled.div`
  height: 400px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TextSection = styled.div`
  padding: 2em;
  background: #F5F5F5;
`;

const Section = styled.div`
  margin-bottom: ${({ more }) => (more ? "40px" : "20px")};
`;

const Text = styled.div`
  color: #777;
  margin-bottom: 30px;
`;

export default function ViewPlant() {
  return (
    <Container>
      <ImageContainer>
        <img src="http://assets.basithkunimal.com/plant3.png" alt="plant" />
      </ImageContainer>
      <TextSection>
        <Section more>
          <PlantText />
        </Section>
        <Section>
          <UserInfo />
        </Section>
        <Text>
          My job requires moving to another country. I don’t have the
          oppurtunity to take my plants with me. I am looking for good people
          who will take good care of my plant.
        </Text>
        <Reply />
      </TextSection>
    </Container>
  );
}
