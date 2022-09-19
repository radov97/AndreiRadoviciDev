import React, { FC, useContext } from "react";
import { ResponsiveContext } from "../general/context";
import { Container } from "../styles/main-page-style";

const MainPage: FC = (): JSX.Element => {
  const { isBigScreen, isTabletOrMobile } = useContext(ResponsiveContext);

  console.log("isBigScreen", isBigScreen, "isTabletOrMobile", isTabletOrMobile);

  return (
    <Container>
      <div>Header</div>
      <div>Content</div>
      <div>Footer</div>
    </Container>
  );
};

export default MainPage;
