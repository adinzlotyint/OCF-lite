import { useContext } from "react";
import { OptionalDataContext } from "../hooks/Contexts";
import { customData } from "../components/ContentPanel/FormBody";

export const useCreateJSON = () => {
  const { optionalData } = useContext(OptionalDataContext);

  const createJSON = (data: customData[]) => {
    // Prepare the JSON object
    const jsonData = {
      optionalData: {
        country: optionalData.country,
        company: optionalData.company,
        fullName: optionalData.fullName,
        email: optionalData.email,
      },
      data,
    };

    // Convert the JSON object to a string
    const jsonString = JSON.stringify(jsonData, null, 2);

    // Trigger the download of the JSON file
    const blob = new Blob([jsonString], { type: "application/json;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "data.json");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return createJSON;
};
