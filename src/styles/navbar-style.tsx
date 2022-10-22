import styled from "styled-components";
import { ImperialRed, White } from "./vars";

const Container = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  height: "50px",
  backgroundColor: ImperialRed,
});

const HomeBtn = styled.button({
  flexGrow: "0",
  height: "100%",
  background: "none",
  font: "inherit",
  cursor: "pointer",
  outline: "inherit",
  border: "none",
  padding: "6px 18px",
  color: White,
  fontSize: "30px",
  backgroundColor: "#5b0b12",
  transition: "all .3s",
  filter: "none",
  "&:hover": {
    filter: "brightness(200%)",
  },
  "&:active": {
    filter: "invert(100%)",
  },
});

const NavigationSection = styled.div({
  flexGrow: "1",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  height: "100%",
});

const ButtonNav = styled.button({
  background: "none",
  font: "inherit",
  cursor: "pointer",
  outline: "inherit",
  border: "none",
  padding: "6px 18px",
  color: White,
  fontSize: "30px",
  backgroundColor: "#5b0b12",
  transition: "all .3s",
  filter: "none",
  "&:hover": {
    filter: "brightness(200%)",
    padding: "6px 40px"
  },
  "&:active": {
    filter: "invert(100%)",
  },
});

export { Container, HomeBtn, NavigationSection, ButtonNav };
