import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
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

function SlideShow({ image }) {
  return (
    <AnimatePresence>
      <div style={{ height: "200px", paddingTop: "30px" }}>
        <motion.img
          key={image.src}
          src={image.src}
          style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
        />
      </div>
    </AnimatePresence>
  );
}

const images = [
  "http://assets.basithkunimal.com/plant1.png",
  "http://assets.basithkunimal.com/plant2.png",
  "http://assets.basithkunimal.com/plant3.png",
];

export default function Home() {
  const [image, setImage] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setImage(image + 1);
    }, 1000);
  }, [image]);
  return (
    <Container animate={{ y: 0 }} initial={{ y: 10 }}>
      <Padding>
        <Searchbar placeholder="Search plants to adopt" />
      </Padding>
      <Fade />
      <Scroll>
        <Categories />
        <SlideShow image={{ src: images[image % images.length] }} />
        <Plants />
      </Scroll>
    </Container>
  );
}
