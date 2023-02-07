import { AppearanceType } from "./types";

export interface IChildrenProps {
  children: React.ReactNode;
}

export interface TypographyProps {
  text: string;
  appearance?: AppearanceType;
  className?: string;
  color?: string;
}

export interface IResponsiveContext {
  isBigScreen: boolean;
  isTabletOrMobile: boolean;
}
