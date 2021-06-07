import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Cacti from "./categories/cacti";
import Creeper from "./categories/creeper";
import Orchid from "./categories/orchid";
import Succulents from "./categories/succulents";

const Head = styled.div`
  display: flex;
  margin-bottom: 1em;
`;

const Title = styled.div`
  flex: 1;
  font-weight: 600;
`;

const More = styled.div`
  color: #777;
  font-size: 11px;
  line-height: 18px;
`;

const Buttons = styled.div`
  display: flex;
`;

const Container = styled.div`
  padding: 3em 0 0;
`;

const items = {
  Succulents: Succulents,
  Creepers: Creeper,
  Orchid: Orchid,
  Cacti: Cacti,
};

export default function Categories() {
  const [selected, setSelected] = useState("Succulents");
  return (
    <Container>
      <Head>
        <Title>Categories</Title>
        <More>See more</More>
      </Head>
      <Buttons>
        {Object.entries(items).map(([k, C]) => (
          <Button key={k} title={k} active={k === selected} onClick={() => setSelected(k)}>
            <C active={k === selected} />
          </Button>
        ))}
      </Buttons>
    </Container>
  );
}
