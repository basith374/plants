import { motion } from "framer-motion";
import { useParams } from "react-router";
import styled from "styled-components";
import { PlantText } from "../Plants/Item";
import UserInfo from "../UserInfo";
import Reply from "./Reply";

const Container = styled(motion.div)`
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
  background: #f5f5f5;
`;

const Section = styled.div`
  margin-bottom: ${({ more }) => (more ? "40px" : "20px")};
`;

const Text = styled.div`
  color: #777;
  margin-bottom: 30px;
`;

export default function ViewPlant() {
  const { id } = useParams();
  return (
    <Container>
      <ImageContainer>
        <motion.img
          src={`http://assets.basithkunimal.com/plant${parseInt(id) + 1}.png`}
          alt="plant"
          transition={{ duration: 0.2 }}
          layoutId={id}
        />
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
