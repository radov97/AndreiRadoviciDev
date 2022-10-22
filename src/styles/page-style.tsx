import styled from "styled-components";
import { CeladonBlue, White } from "./vars";

const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "100vw",
  height: "100vh",
});

const NavbarDiv = styled.div({
  flexGrow: "0",
});

const BodyDiv = styled.div({
  flexGrow: "1",
  overflow: "auto",
  display: "flex",
  flexDirection: "column",
});

const ChildrenDiv = styled.div({
  flexGrow: "1",
  backgroundColor: CeladonBlue,
  color: White,
});

const FooterDiv = styled.div({
  flexGrow: "0",
});

export { Container, BodyDiv, NavbarDiv, ChildrenDiv, FooterDiv };
