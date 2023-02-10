import { FieldError } from "react-hook-form";
import Checked from "../assets/true.png";
import Errorimg from "../assets/false.png";
import { CheckedImage, ErrorImage } from "../pages/styled";
import { EduTypes, ExpTypes, InfoSchemaType } from "../pages/InfoTypes";

export const BorderColorFunction = (watch: string | undefined, name: any) => {
  return {
    border: name
      ? "1px solid #EF5050"
      : watch
      ? "1px solid #98E37E"
      : "1px solid #bcbcbc",
  };
};
export const BorderColorFunction2 = (
  watch: string | undefined,
  error: any,
  touched: any
) => {
  if (touched) {
    return { border: "1px solid #bcbcbc" };
  } else if (error && watch) {
    return { border: "1px solid #EF5050" };
  } else if (!error) {
    return { border: "1px solid #98E37E" };
  }

  // border: name
  // ? "1px solid #EF5050"
  // : watch && name2
  // ? "1px solid #98E37E"
  // : "1px solid #bcbcbc",
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

export const BackToStarterPage = (
  setInfoData: React.Dispatch<React.SetStateAction<InfoSchemaType>>,
  setPhoto: (val: string) => void,
  setExpData: React.Dispatch<React.SetStateAction<ExpTypes>>,
  setEduData: React.Dispatch<React.SetStateAction<EduTypes>>
) => {
  return (
    setInfoData({
      name: "",
      surname: "",
      about_me: "",
      email: "",
      phone_number: "",
    }),
    setPhoto(""),
    setExpData({
      experiences: [
        {
          position: "",
          description: "",
          employer: "",
          due_date: "",
          start_date: "",
        },
      ],
    }),
    setEduData({
      educations: [
        {
          institute: "",
          degree: "",
          due_date: "",
          description: "",
        },
      ],
    })
  );
};
export const convert2base64 = (
  event: React.ChangeEvent<HTMLInputElement>,
  setPhoto: (val: string) => void
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
