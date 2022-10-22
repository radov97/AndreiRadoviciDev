import { NavbarEvents } from "../../general/types";
import { INavbarReducerAction } from "../interface";

const navbarReducer = (
  state: NavbarEvents = "HOME",
  action: INavbarReducerAction
): NavbarEvents => {
  switch (action.type) {
    case "HOME":
      return "HOME";
    case "WORK-EXPERIENCE":
      return "WORK-EXPERIENCE";
    case "EDUCATION":
      return "EDUCATION";
    case "SKILLS":
      return "SKILLS";
    case "CONTACT":
      return "CONTACT";
    default:
      return state;
  }
};

export default navbarReducer;
