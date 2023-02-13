import axios from "axios";
import { useNavigate } from "react-router-dom";
import { removeEmpty } from "../utils";

type Data = {
  name: string;
  surname: string;
  email: string;
  phone_number: string;
  experiences: {}[];
  educations: {}[];
  image: string;
  about_me: string | undefined;
};
const usePostData = (data: Data) => {
  const navigate = useNavigate();
  const submit = async () => {
    try {
      const res = await axios({
        method: "get",
        url: data.image,
        responseType: "blob",
      });
      const file = new File([res.data], "image", { type: "image/png" });
      const modifiedData = {
        ...data,
        image: file,
        educations: removeEmpty(data.educations),
      };

      const response = await axios.post(
        "https://resume.redberryinternship.ge/api/cvs",
        modifiedData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.status);
      console.log(response.data);
      navigate("/resume", {
        state: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return submit;
};
export default usePostData;
