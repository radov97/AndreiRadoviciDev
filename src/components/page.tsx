import React, { FC, useContext } from "react";
import { ResponsiveContext } from "../general/context";
import { IChildrenProp } from "../general/interfaces";
import { Container } from "../styles/page-style";

const Page: FC<IChildrenProp> = ({ children }): JSX.Element => {
  const { isBigScreen, isTabletOrMobile } = useContext(ResponsiveContext);

  console.log("isBigScreen", isBigScreen, "isTabletOrMobile", isTabletOrMobile);

  return (
    <Container>
      <div>Header</div>
      <div>{children}</div>
      <div>Footer</div>
    </Container>
  );
};

export default Page;
