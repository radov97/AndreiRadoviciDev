import { INavbarReducerAction } from "../interface";

export const SET_HOME = (): INavbarReducerAction => {
  return {
    type: "HOME",
  };
};

export const SET_WORKEXPERIENCE = (): INavbarReducerAction => {
  return {
    type: "WORK-EXPERIENCE",
  };
};

export const SET_EDUCATION = (): INavbarReducerAction => {
  return {
    type: "EDUCATION",
  };
};

export const SET_SKILLS = (): INavbarReducerAction => {
  return {
    type: "SKILLS",
  };
};

export const SET_CONTACT = (): INavbarReducerAction => {
  return {
    type: "CONTACT",
  };
};
