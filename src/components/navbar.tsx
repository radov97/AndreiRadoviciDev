import { FC, useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { ResponsiveContext } from "../general/context";
import {
  SET_HOME,
  SET_WORKEXPERIENCE,
  SET_EDUCATION,
  SET_SKILLS,
  SET_CONTACT,
} from "../redux/actions/navbar-events";
import { IoHome } from "react-icons/io5";
import { ImMenu3, ImMenu4 } from "react-icons/im";
import styles from "./../styles/components/navbar.module.css";

const Navbar: FC = (): JSX.Element => {
  const { isBigScreen, isTabletOrMobile } = useContext(ResponsiveContext);
  const dispatch = useDispatch();
  const [isMenu, setIsMenu] = useState<boolean>(false);

  const setHomeHandler = () => {
    dispatch(SET_HOME());
    setIsMenu(false);
  };
  const setWorkExperienceHandler = () => {
    dispatch(SET_WORKEXPERIENCE());
    setIsMenu(false);
  };
  const setEducationHandler = () => {
    dispatch(SET_EDUCATION());
    setIsMenu(false);
  };
  const setSkillsHandler = () => {
    dispatch(SET_SKILLS());
    setIsMenu(false);
  };
  const setContactHandler = () => {
    dispatch(SET_CONTACT());
    setIsMenu(false);
  };

  const mobileComponent = (): JSX.Element => {
    return (
      <div className={styles.containerMobile}>
        <div className={styles.homeBurgerLine}>
          <button className={styles.iconBtn} onClick={() => setHomeHandler()}>
            <IoHome />
          </button>
          <button className={styles.iconBtn} onClick={() => setIsMenu(!isMenu)}>
            {isMenu ? <ImMenu4 /> : <ImMenu3 />}
          </button>
        </div>
        {isMenu && (
          <div className={styles.mobileMenu}>
            <button
              className={styles.menuButton}
              onClick={() => setWorkExperienceHandler()}
            >
              Work Experience
            </button>
            <button
              className={styles.menuButton}
              onClick={() => setEducationHandler()}
            >
              Education
            </button>
            <button
              className={styles.menuButton}
              onClick={() => setSkillsHandler()}
            >
              Skills
            </button>
            <button
              className={styles.menuButton}
              onClick={() => setContactHandler()}
            >
              Contact
            </button>
          </div>
        )}
      </div>
    );
  };

  const bigScreenComponent = (): JSX.Element => {
    return (
      <div className={styles.container}>
        <button className={styles.iconBtn} onClick={() => setHomeHandler()}>
          <IoHome />
        </button>
        <div className={styles.navigationSection}>
          <button
            className={styles.buttonNav}
            onClick={() => setWorkExperienceHandler()}
          >
            Work Experience
          </button>
          <button
            className={styles.buttonNav}
            onClick={() => setEducationHandler()}
          >
            Education
          </button>
          <button
            className={styles.buttonNav}
            onClick={() => setSkillsHandler()}
          >
            Skills
          </button>
          <button
            className={styles.buttonNav}
            onClick={() => setContactHandler()}
          >
            Contact
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      {isBigScreen && bigScreenComponent()}
      {isTabletOrMobile && mobileComponent()}
    </>
  );
};
export default Navbar;
