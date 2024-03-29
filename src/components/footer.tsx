import { FC } from "react";
import { SocialIcon } from "react-social-icons";
import { CgCopyright } from "react-icons/cg";
import styles from "./../styles/components/footer.module.css";
import { White } from "../helpers/colours";

const Footer: FC = (): JSX.Element => (
  <div className={styles.container}>
    <div className={styles.centerContainer}>
      <div className={styles.socialMediaWrapper}>
        <SocialIcon
          url="https://www.facebook.com/andrei.rdv.5"
          fgColor={White}
          className={styles.socialIcon}
        />
        <SocialIcon
          url="https://www.linkedin.com/in/andrei-radovici-386a6517a/"
          fgColor={White}
          className={styles.socialIcon}
        />
        <SocialIcon
          url="https://github.com/radov97"
          fgColor={White}
          className={styles.socialIcon}
        />
        <SocialIcon
          url="https://www.instagram.com/andrei_radovici/"
          fgColor={White}
          className={styles.socialIcon}
        />
        <SocialIcon
          fgColor={White}
          url="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMVVxPgFhGwTrLVsMdqdKjsVJjCZhSjVcrrktSTNxvdQkXDGrpvFfrHHTjFLTGclRvkJjNx"
          className={styles.socialIcon}
        />
      </div>
      <div className={styles.copyright}>
        <CgCopyright /> {new Date().getFullYear()} Copyright: Andrei Radovici
      </div>
    </div>
  </div>
);
export default Footer;
