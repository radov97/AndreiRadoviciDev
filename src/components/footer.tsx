import { FC } from "react";
import { SocialIcon } from "react-social-icons";
import {
  CenterContainer,
  Container,
  Copyright,
  SocialMediaWrapper,
} from "../styles/footer-style";
import { White } from "../styles/vars";
import { CgCopyright } from "react-icons/cg";

const Footer: FC = (): JSX.Element => {
  return (
    <Container>
      <CenterContainer>
        <SocialMediaWrapper>
          <SocialIcon
            url="https://www.facebook.com/andrei.rdv.5"
            fgColor={White}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/andrei-radovici-386a6517a/"
            fgColor={White}
          />
          <SocialIcon url="https://github.com/radov97" fgColor={White} />
          <SocialIcon
            url="https://www.instagram.com/andrei_radovici/"
            fgColor={White}
          />
          <SocialIcon
            fgColor={White}
            url="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMVVxPgFhGwTrLVsMdqdKjsVJjCZhSjVcrrktSTNxvdQkXDGrpvFfrHHTjFLTGclRvkJjNx"
          />
        </SocialMediaWrapper>
        <Copyright>
          <CgCopyright /> {new Date().getFullYear()} Copyright: Andrei Radovici
        </Copyright>
      </CenterContainer>
    </Container>
  );
};
export default Footer;
