import { FC } from "react";
import { IChildrenProps } from "../general/interfaces";
import Footer from "./footer";
import Navbar from "./navbar";
import styles from "./../styles/components/page.module.css";

const Page: FC<IChildrenProps> = ({ children }): JSX.Element => (
  <div className={styles.container}>
    <div className={styles.navbar}>
      <Navbar />
    </div>
    <div className={styles.body}>
      <div className={styles.children}>{children}</div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  </div>
);

export default Page;
