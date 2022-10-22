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
import {
  Container,
  IconBtn,
  NavigationSection,
  ButtonNav,
  HomeBurgerLine,
  MobileMenu,
  MenuButton,
  ContainerMobile,
} from "../styles/navbar-style";
import { IoHome } from "react-icons/io5";
import { ImMenu3, ImMenu4 } from "react-icons/im";

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
      <ContainerMobile>
        <HomeBurgerLine>
          <IconBtn onClick={() => setHomeHandler()}>
            <IoHome />
          </IconBtn>
          <IconBtn onClick={() => setIsMenu(!isMenu)}>
            {isMenu ? <ImMenu4 /> : <ImMenu3 />}
          </IconBtn>
        </HomeBurgerLine>
        {isMenu && (
          <MobileMenu>
            <MenuButton onClick={() => setWorkExperienceHandler()}>
              Work Experience
            </MenuButton>
            <MenuButton onClick={() => setEducationHandler()}>
              Education
            </MenuButton>
            <MenuButton onClick={() => setSkillsHandler()}>Skills</MenuButton>
            <MenuButton onClick={() => setContactHandler()}>Contact</MenuButton>
          </MobileMenu>
        )}
      </ContainerMobile>
    );
  };

  const bigScreenComponent = (): JSX.Element => {
    return (
      <Container>
        <IconBtn onClick={() => setHomeHandler()}>
          <IoHome />
        </IconBtn>
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
