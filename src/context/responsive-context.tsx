import React, { FC } from "react";
import { useMediaQuery } from "react-responsive";
import { ResponsiveContext } from "../general/context";
import { IChildrenProp, IResponsiveContext } from "../general/interfaces";
import { desktopBreakpoint, tabletBreakpoint } from "../styles/vars";

const ReponsiveProvider: FC<IChildrenProp> = ({ children }) => {
  const providerValue: IResponsiveContext = {
    isBigScreen: useMediaQuery({ 
        query: `(min-width: ${desktopBreakpoint})` 
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
