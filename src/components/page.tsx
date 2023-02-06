import { FC } from "react";
import { IChildrenProp } from "../general/interfaces";
import Footer from "./footer";
import Navbar from "./navbar";
import styles from "./../styles/page.module.css";

const Page: FC<IChildrenProp> = ({ children }): JSX.Element => (
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
