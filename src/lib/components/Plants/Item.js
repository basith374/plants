import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled.div`
  height: 100px;
  margin-bottom: 1em;
  display: flex;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
`;

const Image = styled.div`
  width: 100px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

function DirectionsIcon() {
  return (
    <svg width="12" viewBox="0 0 17 17">
      <path
        d="M16.7481 7.89862L9.09809 0.248625C8.76659 -0.0828749 8.22683 -0.0828749 7.8996 0.248625L0.249601 7.89862C-0.0818984 8.23012 -0.0818984 8.76988 0.249601 9.10138L7.8996 16.7471V16.7514C8.2311 17.0829 8.77086 17.0829 9.10236 16.7514L16.7524 9.10138C17.0838 8.76562 17.0838 8.23012 16.7481 7.89862ZM10.1988 10.6229V8.49787H6.79883V11.0479H5.09882V7.64788C5.09882 7.17613 5.47706 6.7979 5.94881 6.7979H10.1988V4.67287L13.1738 7.64788L10.1988 10.6229Z"
        fill="#47615F"
      />
    </svg>
  );
}

const Button = styled.button`
  background: #d9eceb;
  border: none;
  padding: 0.5em 1em;
  border-radius: 6px;
  font-size: 13px;
  svg {
    margin-right: 5px;
  }
`;

const Title = styled.div`
  font-size: 15px;
  margin-bottom: 5px;
  font-weight: 600;
`;

const Text = styled.div`
  color: #777;
  font-size: 12px;
`;

const Content = styled.div`
  flex: 1;
  padding: 1em;
  background: #fff;
`;

const TextSection = styled.div`
  margin-bottom: 1em;
`;

export function PlantText() {
  return (
    <>
      <TextSection>
        <Title>Sector 2, HSR Layout</Title>
        <Text>15 years old</Text>
      </TextSection>
      <div>
        <Button>
          <DirectionsIcon /> Directions
        </Button>
      </div>
    </>
  );
}

export default function Item({ image, onClick, id }) {
  return (
    <Container onClick={onClick}>
      <Image>
        <motion.img
          src={image}
          alt="preview"
          layoutId={id}
          transition={{ duration: 0.2 }}
        />
      </Image>
      <Content>
        <TextSection>
          <Title>Sector 2, HSR Layout</Title>
          <Text>15 years old</Text>
        </TextSection>
        <div>
          <Button>
            <DirectionsIcon /> Directions
          </Button>
        </div>
      </Content>
    </Container>
  );
}
