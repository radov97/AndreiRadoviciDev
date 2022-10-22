import styled from "styled-components";
import { PrussianBlue, White } from "./vars";

const Container = styled.div({
  height: "auto",
  minHeight: "100px",
  backgroundColor: PrussianBlue,
  color: White,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px 0",
});

const CenterContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-evenly",
  padding: "0 20px",
});

const SocialMediaWrapper = styled.div({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  gap: "12px",
});

const Copyright = styled.p({
  fontSize: "18px",
  letterSpacing: "0.67px",
  textAlign: "center",
  fontStyle: "italic",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "3px",
});

export { Container, CenterContainer, SocialMediaWrapper, Copyright };
