import { motion } from "framer-motion";
import styled from "styled-components";
import Categories from "../components/Categories";
import Plants from "../components/Plants";
import Searchbar from "../components/Searchbar";

const Container = styled(motion.div)`
  background: #f5f5f5;
  flex: 1;
  padding: 2em 0;
  border-radius: 2em 2em 0 0;
  overflow: hidden;
  position: relative;
`;

const Scroll = styled.div`
  padding: 0 3em;
  overflow-y: scroll;
  height: 100%;
`;

const Fade = styled.div`
  background: linear-gradient(to bottom, #f5f5f5, transparent);
  position: absolute;
  top: 70px;
  left: 0;
  right: 0;
  height: 30px;
`;

const Padding = styled.div`
  padding: 0 3em;
`;

export default function Home() {
  return (
    <Container animate={{ y: 0 }} initial={{ y: 10 }}>
      <Padding>
        <Searchbar placeholder="Search plants to adopt" />
      </Padding>
      <Fade />
      <Scroll>
        <Categories />
        <Plants />
      </Scroll>
    </Container>
  );
}
