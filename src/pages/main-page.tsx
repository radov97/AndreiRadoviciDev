import React, { FC, useContext } from "react";
import { ResponsiveContext } from "../general/context";

const MainPage: FC = (): JSX.Element => {
  const { isBigScreen, isTabletOrMobile } = useContext(ResponsiveContext);

  console.log("isBigScreen", isBigScreen, "isTabletOrMobile", isTabletOrMobile);

  return <div>Hello World, this is my first styled component!</div>;
};

export default MainPage;
