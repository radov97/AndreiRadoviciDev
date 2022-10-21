import React, { FC, useContext } from "react";
import Page from "../components/page";
import { ResponsiveContext } from "../general/context";

const MainPage: FC = (): JSX.Element => {
  const { isBigScreen, isTabletOrMobile } = useContext(ResponsiveContext);

  console.log("isBigScreen", isBigScreen, "isTabletOrMobile", isTabletOrMobile);

  return (
    <Page>
      <h1>This is the content</h1>
    </Page>
  );
};

export default MainPage;
