import styled from "styled-components";

const Container = styled.div`
  background: #fff;
  height: 100px;
  display: flex;
  align-items: center;
`;

function HamburgerIcon() {
  return (
    <svg width="24" viewBox="0 0 41 28">
      <rect
        x="9"
        width="23"
        height="6"
        rx="3"
        fill="#888"
      />
      <rect
        x="9"
        y="22"
        width="23"
        height="6"
        rx="3"
        fill="#888"
      />
      <rect
        y="11"
        width="41"
        height="6"
        rx="3"
        fill="#888"
      />
    </svg>
  );
}

const Middle = styled.div`
  flex: 1;
  text-align: center;
`;

const Profile = styled.div`
  img {
    width: 30px;
    border-radius: 15px;
  }
`;

const Dot = styled.div`
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #2aaa84;
  border-radius: 5px;
`;

const Text = styled.div`
  color: #777;
  margin-bottom: 10px;
`;

const Button = styled.div`
  width: 80px;
  text-align: center;
`;

const Location = styled.div`
  font-size: 15px;
  font-weight: 600;
`;

export default function Header({ showSidebar }) {
  return (
    <Container>
      <Button onClick={showSidebar}>
        <HamburgerIcon />
      </Button>
      <Middle>
        <Text>Location</Text>
        <Location>
          <Dot /> HSR, Bangalore
        </Location>
      </Middle>
      <Button>
        <Profile>
          <img src="http://assets.basithkunimal.com/profile.png" alt="Profile" />
        </Profile>
      </Button>
    </Container>
  );
}
