import { createContext } from "react";
import { IResponsiveContext } from "./interfaces";

const defaultState: IResponsiveContext = {
  isBigScreen: false,
  isTabletOrMobile: false,
};

export const ResponsiveContext =
  createContext<IResponsiveContext>(defaultState);
