import styled from "styled-components";
import { ImperialRed, White } from "./vars";

const Container = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  height: "50px",
  backgroundColor: ImperialRed,
});

const IconBtn = styled.button({
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
  backgroundColor: ImperialRed,
  transition: "all .3s",
  filter: "none",
  "&:hover": {
    filter: "brightness(80%)",
  },
  "&:active": {
    filter: "invert(80%)",
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
  letterSpacing: "0.7px",
  fontSize: "30px",
  backgroundColor: ImperialRed,
  fontWeight: "bold",
  transition: "all .3s",
  filter: "none",
  "&:hover": {
    filter: "brightness(80%)",
    padding: "6px 40px",
  },
  "&:active": {
    filter: "invert(80%)",
  },
});

const ContainerMobile = styled.div({
  display: "flex",
  flexDirection: "column",
  height: "auto",
  minHeight: "50px",
  backgroundColor: ImperialRed,
  transition: "all .3s",
});

const HomeBurgerLine = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  height: "50px",
});

const MobileMenu = styled.div({
  height: "200px",
  backgroundColor: ImperialRed,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex",
  alignItems: "flex-end",
});

const MenuButton = styled.div({
  background: "none",
  font: "inherit",
  cursor: "pointer",
  outline: "inherit",
  border: "none",
  padding: "6px 18px",
  color: White,
  fontSize: "30px",
  backgroundColor: ImperialRed,
  transition: "all .3s",
  filter: "none",
  height: "50px",
  width: "230px",
  textAlign: "right",
  "&:hover": {
    filter: "brightness(200%)",
  },
  "&:active": {
    filter: "invert(100%)",
  },
});

export {
  Container,
  IconBtn,
  NavigationSection,
  ButtonNav,
  ContainerMobile,
  HomeBurgerLine,
  MobileMenu,
  MenuButton,
};
