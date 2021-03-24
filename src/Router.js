import Home from "./Home";
import AlertDoc from "./comp_doc/AlertDoc";
import AvatarDoc from "./comp_doc/AvatarDoc";
import BadgeDoc from "./comp_doc/BadgeDoc";
import ButtonDoc from "./comp_doc/ButtonDoc";
import CardDoc from "./comp_doc/CardDoc";
import InputBoxDoc from "./comp_doc/InputBoxDoc";
import ModalDoc from "./comp_doc/ModalDoc";
export const ComponentRouter = ({ comp }) => {
  switch (comp) {
    case "HOME":
      return <Home />;
    case "Avatar":
      return <AvatarDoc />;
    case "Badge":
      return <BadgeDoc />;
    case "Alert":
      return <AlertDoc />;
    case "Button":
      return <ButtonDoc />;
    case "Card":
      return <CardDoc />;
    case "Input box":
      return <InputBoxDoc />;
    case "Modal":
      return <ModalDoc />;
    default:
      return <Home />;
  }
};
