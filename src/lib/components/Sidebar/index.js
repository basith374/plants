import styled from "styled-components";
import Leaf from "../Menubar/buttons/leaf";
import UserInfo from "../UserInfo";
import AddPlant from "./icons/addplant";
import Categories from "./icons/categories";
import Home from "./icons/home";
import Logout from "./icons/logout";
import Settings from "./icons/settings";

const Container = styled.div`
  background: #306060;
  position: fixed;
  top: 0;
  bottom: 0;
  left: ${({ show }) => (show ? 0 : "-300px")};
  width: 300px;
  z-index: 2;
  border-radius: 0 1em 1em 0;
  transition: left 200ms linear;
  display: flex;
  align-items: center;
`;

const Overlay = styled.div`
  background: transparent;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
`;

const Link = styled.div`
  color: #aaa;
  padding: 1em 3em;
  font-weight: 600;
  svg {
    width: 16px;
    height: 16px;
    margin-right: 1em;
    path {
      fill: #97AFAF;
    }
  }
`;

const Links = styled.div``;

const Float = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 3em 0;
  display: flex;
  justify-content: center;
`;

const links = {
  Home,
  Adoptions: Leaf,
  Categories,
  "Add plant": AddPlant,
  Settings,
  Logout,
};

export default function Sidebar({ show, hide }) {
  return (
    <>
      {show && <Overlay onClick={hide} />}
      <Container show={show}>
        <Float>
          <UserInfo light big />
        </Float>
        <Links>
          {Object.entries(links).map(([k, C]) => {
            return (
              <Link key={k}>
                <C /> {k}
              </Link>
            );
          })}
        </Links>
      </Container>
    </>
  );
}
