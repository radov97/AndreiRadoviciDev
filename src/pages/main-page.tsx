import React, { FC, useContext, useEffect } from "react";
import Page from "../components/page";
import { ResponsiveContext } from "../general/context";
import { useSelector, useDispatch } from "react-redux";
import { SET_CONTACT, SET_EDUCATION } from "../redux/actions/navbar-events";
import { RootSelector } from "..";

const MainPage: FC = (): JSX.Element => {
  const { isBigScreen, isTabletOrMobile } = useContext(ResponsiveContext);
  const dispatch = useDispatch();

  const navbarState = useSelector<RootSelector>((state) => state.navbar);

  console.log("isBigScreen", isBigScreen, "isTabletOrMobile", isTabletOrMobile);

  useEffect(() => {
    console.log(navbarState);
  }, [dispatch, navbarState]);

  // Comment test
  return (
    <Page>
      <h1>{`Navbar state: ${navbarState}`}</h1>
      <h1>{`Navbar state: ${navbarState}`}</h1>
      <h1>{`Navbar state: ${navbarState}`}</h1>
      <h1>{`Navbar state: ${navbarState}`}</h1>
      <h1>{`Navbar state: ${navbarState}`}</h1>
      <h1>{`Navbar state: ${navbarState}`}</h1>
      <button onClick={() => dispatch(SET_CONTACT())}>State</button>
      <button onClick={() => dispatch(SET_EDUCATION())}>State</button>
    </Page>
  );
};

export default MainPage;
