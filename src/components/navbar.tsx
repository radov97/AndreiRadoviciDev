import { FC, useContext } from "react";
import { useDispatch } from "react-redux";
import { ResponsiveContext } from "../general/context";
import {
  SET_HOME,
  SET_WORKEXPERIENCE,
  SET_EDUCATION,
  SET_SKILLS,
  SET_CONTACT,
} from "../redux/actions/navbar-events";
import {
  Container,
  HomeBtn,
  NavigationSection,
  ButtonNav,
} from "../styles/navbar-style";
import { IoHome } from "react-icons/io5";

const Navbar: FC = (): JSX.Element => {
  const { isBigScreen, isTabletOrMobile } = useContext(ResponsiveContext);
  const dispatch = useDispatch();

  const setHomeHandler = () => {
    dispatch(SET_HOME());
  };
  const setWorkExperienceHandler = () => {
    dispatch(SET_WORKEXPERIENCE());
  };
  const setEducationHandler = () => {
    dispatch(SET_EDUCATION());
  };
  const setSkillsHandler = () => {
    dispatch(SET_SKILLS());
  };
  const setContactHandler = () => {
    dispatch(SET_CONTACT());
  };

  const mobileComponent = (): JSX.Element => {
    return <Container>small devics</Container>;
  };

  const bigScreenComponent = (): JSX.Element => {
    return (
      <Container>
        <HomeBtn onClick={() => setHomeHandler()}>
          <IoHome />
        </HomeBtn>
        <NavigationSection>
          <ButtonNav onClick={() => setWorkExperienceHandler()}>
            Work Experience
          </ButtonNav>
          <ButtonNav onClick={() => setEducationHandler()}>Education</ButtonNav>
          <ButtonNav onClick={() => setSkillsHandler()}>Skills</ButtonNav>
          <ButtonNav onClick={() => setContactHandler()}>Contact</ButtonNav>
        </NavigationSection>
      </Container>
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
