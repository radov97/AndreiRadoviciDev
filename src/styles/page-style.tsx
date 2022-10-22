import styled from "styled-components";
import { lightBlue } from "./vars";

const Container = styled.div({
  backgroundColor: lightBlue,
  display: "flex",
  color: "white",
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
  backgroundColor: "green",
  display: "flex",
  flexDirection: "column",
});

const ChildrenDiv = styled.div({
  flexGrow: "1",
});

const FooterDiv = styled.div({
  flexGrow: "0",
});

export { Container, BodyDiv, NavbarDiv, ChildrenDiv, FooterDiv };
