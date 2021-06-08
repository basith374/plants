import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const ImageSection = styled.div`
  margin-right: ${({ big }) => (big ? "20px" : "10px")};
`;

const ImageContainer = styled.div`
  width: ${({ big }) => (big ? "50px" : "30px")};
  height: ${({ big }) => (big ? "50px" : "30px")};
  border-radius: ${({ big }) => (big ? "25px" : "15px")};
  overflow: hidden;
  img {
    width: 100%;
  }
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
  font-weight: 600;
  color: ${({ light }) => (light ? "#fff" : "initial")};
`;

const Extra = styled.div`
  color: ${({ light }) => (light ? "#fff" : "#777")};
  font-size: 12px;
`;

export default function UserInfo({ light, big }) {
  return (
    <Container>
      <ImageSection big={big}>
        <ImageContainer big={big}>
          <img
            src="http://assets.basithkunimal.com/profile.png"
            alt="profile"
          />
        </ImageContainer>
      </ImageSection>
      <TextSection>
        <Title light={light}>Andrea Jeremiah</Title>
        <Extra light={light}>Owner</Extra>
      </TextSection>
    </Container>
  );
}
