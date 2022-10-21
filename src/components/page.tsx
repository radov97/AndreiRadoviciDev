import React, { FC, useContext } from "react";
import { ResponsiveContext } from "../general/context";
import { IChildrenProp } from "../general/interfaces";
import { Container } from "../styles/page-style";

const Page: FC<IChildrenProp> = ({ children }): JSX.Element => {
  const { isBigScreen, isTabletOrMobile } = useContext(ResponsiveContext);

  console.log("isBigScreen", isBigScreen, "isTabletOrMobile", isTabletOrMobile);

  // Create header and footer component

  return (
    <Container>
      <div>Header</div>
      {children}
      <div>Footer</div>
    </Container>
  );
};

export default Page;
