import { FC } from "react";
import { IChildrenProp } from "../general/interfaces";
import {
  Container,
  NavbarDiv,
  ChildrenDiv,
  FooterDiv,
  BodyDiv,
} from "../styles/page-style";

const Page: FC<IChildrenProp> = ({ children }): JSX.Element => {
  return (
    <Container>
      <NavbarDiv style={{ backgroundColor: "blue" }}>Header</NavbarDiv>
      <BodyDiv>
        <ChildrenDiv>{children}</ChildrenDiv>
        <FooterDiv style={{ backgroundColor: "red" }}>Footer</FooterDiv>
      </BodyDiv>
    </Container>
  );
};

export default Page;
