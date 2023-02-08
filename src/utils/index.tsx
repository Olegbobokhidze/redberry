import { FieldError } from "react-hook-form";
import Checked from "../assets/true.png";
import Errorimg from "../assets/false.png";
import { CheckedImage, ErrorImage } from "../pages/styled";

export const BorderColorFunction = (
  watch: string | undefined,
  name: FieldError | undefined
) => {
  return {
    border: name
      ? "1px solid #EF5050"
      : watch
      ? "1px solid #98E37E"
      : "1px solid #bcbcbc",
  };
};
// #EF5050
export const FunctionShowLogo = (
  watch: string | undefined,
  name: FieldError | undefined,
  control: boolean
) => {
  if ((watch && name) || (name && control)) {
    return <ErrorImage src={Errorimg} style={{ display: "flex" }} />;
  } else if ((watch && !name) || control) {
    return <CheckedImage src={Checked} style={{ display: "flex" }} />;
  } else if (control) {
    return;
  }
};
export const FormattedNumber = (phonenumber: string | undefined) => {
  return (
    phonenumber &&
    phonenumber.slice(0, 4) +
      " " +
      phonenumber.slice(4, 7) +
      " " +
      phonenumber.slice(7, 9) +
      " " +
      phonenumber.slice(9, 11) +
      " " +
      phonenumber.slice(11)
  );
};

export const BackToStarterPage = (setInfoData: any, setPhoto: any) => {
  return (
    setInfoData({
      name: "",
      surname: "",
      about_me: "",
      email: "",
      phone_number: "",
    }),
    setPhoto("")
  );
};
export const convert2base64 = (
  event: React.ChangeEvent<HTMLInputElement>,
  setPhoto: any
) => {
  const files = event.target.files;
  if (files) {
    const file = files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const result = reader.result?.toString();
      result && setPhoto(result);
    };

    reader.readAsDataURL(file);
  }
};
