import { FieldError } from "react-hook-form";
import Checked from "../assets/true.png";
import Errorimg from "../assets/false.png";
import { CheckedImage, ErrorImage } from "../pages/styled";
export const BorderColorFunction = (
  control: boolean,
  name: FieldError | undefined
) => {
  if (control && name) {
    return { border: "1px solid #EF5050" };
  } else if (control && !name) {
    return { border: "1px solid #98E37E" };
  } else if (!control) {
    return { border: "1px solid #bcbcbc" };
  }
};
export const FunctionShowLogo = (
  control: boolean,
  name: FieldError | undefined
) => {
  if (control && name) {
    return <ErrorImage src={Errorimg} style={{ display: "flex" }} />;
  } else if (control && !name) {
    return <CheckedImage src={Checked} style={{ display: "flex" }} />;
  } else if (!control) {
    return;
  }
};
