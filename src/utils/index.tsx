import { FieldError } from "react-hook-form";
import Checked from "../assets/true.png";
import Errorimg from "../assets/false.png";
import { CheckedImage, ErrorImage } from "../pages/styled";
import { EduTypes, ExpTypes, InfoSchemaType } from "../pages/InfoTypes";

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
};
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
          degree_id: 0,
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
export const isRequired = (obj: {}, id: number) => {
  if (id !== 0 && Object.values(obj).every((value) => !value)) {
    return false;
  } else if (id !== 0 && Object.values(obj).every((value) => value !== "")) {
    return true;
  } else {
    return true;
  }
};

export function removeEmptyObjects(
  array: object[],
  data: React.Dispatch<React.SetStateAction<any>>
) {
  const nonEmptyExperiences = array.filter((obj) => {
    return Object.values(obj).every((val) => val !== "" && val !== null);
  });
  data((prevExpData: any) => ({
    experiences: nonEmptyExperiences,
  }));
}
export const setDegreeTitle = (deg: number) => {
  if (deg === 1) {
    return "საშუალო სკოლის დიპლომი";
  } else if (deg === 2) {
    return "ზოგადსაგანმანათლებლო დიპლომი";
  } else if (deg === 3) {
    return "ბაკალავრი";
  } else if (deg === 4) {
    return "მაგისტრი";
  } else if (deg === 5) {
    return "დოქტორი";
  } else if (deg === 6) {
    return "ასოცირებული ხარისხი";
  } else if (deg === 7) {
    return "სტუდენტი";
  } else if (deg === 8) {
    return "კოლეჯი(ხარისხის გარეშე)";
  } else if (deg === 9) {
    return "სხვა";
  }
};
