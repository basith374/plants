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
  font-size: 15px;
`;

const More = styled.div`
  color: #777;
  font-size: 11px;
  line-height: 18px;
`;

const Buttons = styled.div`
  display: flex;
`

const Container = styled.div`
  padding: 3em 0 0;
`

export default function Categories() {
  return (
    <Container>
      <Head>
        <Title>Categories</Title>
        <More>See more</More>
      </Head>
      <Buttons>
        <Button title="Succulents" active>
            <Succulents />
        </Button>
        <Button title="Creepers">
            <Creeper />
        </Button>
        <Button title="Orchid">
            <Orchid />
        </Button>
        <Button title="Cacti">
            <Cacti />
        </Button>
      </Buttons>
    </Container>
  );
}
