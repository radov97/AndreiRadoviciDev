import { FC } from "react";
import { SocialIcon } from "react-social-icons";
import { White } from "../styles/vars";
import { CgCopyright } from "react-icons/cg";
import styles from "./../styles/footer.module.css";

const Footer: FC = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.centerContainer}>
        <div className={styles.socialMediaWrapper}>
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
        </div>
        <div className={styles.copyright}>
          <CgCopyright /> {new Date().getFullYear()} Copyright: Andrei Radovici
        </div>
      </div>
    </div>
  );
};
export default Footer;
