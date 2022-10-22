import { FC } from "react";
import { IChildrenProp } from "../general/interfaces";
import {
  Container,
  NavbarDiv,
  ChildrenDiv,
  FooterDiv,
  BodyDiv,
} from "../styles/page-style";
import Footer from "./footer";
import Navbar from "./navbar";

const Page: FC<IChildrenProp> = ({ children }): JSX.Element => (
  <Container>
    <NavbarDiv>
      <Navbar />
    </NavbarDiv>
    <BodyDiv>
      <ChildrenDiv>{children}</ChildrenDiv>
      <FooterDiv>
        <Footer />
      </FooterDiv>
    </BodyDiv>
  </Container>
);

export default Page;
