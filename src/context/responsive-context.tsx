import React, { FC } from "react";
import { useMediaQuery } from "react-responsive";
import { ResponsiveContext } from "../general/context";
import { IChildrenProps, IResponsiveContext } from "../general/interfaces";
import { desktopBreakpoint, tabletBreakpoint } from "../helpers/breakpoints";

const ReponsiveProvider: FC<IChildrenProps> = ({ children }) => {
  const providerValue: IResponsiveContext = {
    isBigScreen: useMediaQuery({
      query: `(min-width: ${desktopBreakpoint})`,
    }),
    isTabletOrMobile: useMediaQuery({
      query: `(max-width: ${tabletBreakpoint})`,
    }),
  };

  return (
    <ResponsiveContext.Provider value={providerValue}>
      {children}
    </ResponsiveContext.Provider>
  );
};

export default ReponsiveProvider;
