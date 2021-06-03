import styled from "styled-components";

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

export default function Sidebar({ show, hide }) {
  return (
    <>
      {show && <Overlay onClick={hide} />}
      <Container show={show} />
    </>
  );
}
