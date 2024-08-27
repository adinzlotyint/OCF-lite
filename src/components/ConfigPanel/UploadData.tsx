import { useContext, useState } from "react";
import UploadFrame from "./UploadFrame";
import Ajv from "ajv";
import schema from "../../interfaces/TableDataJSON";
import { TableDataContext, OptionalDataContext } from "../../hooks/Contexts";

const ajv = new Ajv();
const validate = ajv.compile(schema);

const UploadTemplate = () => {
  const [uploadStatus, setUploadStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { setTableData } = useContext(TableDataContext);
  const { setOptionalData } = useContext(OptionalDataContext);

  const handleTemplateUpload = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.DragEvent<HTMLLabelElement>
  ) => {
    let files: FileList | null = null;

    if ("files" in event.target) {
      files = event.target.files;
    }
    if ("dataTransfer" in event) {
      files = event.dataTransfer.files;
    }

    if (files && files.length === 1) {
      const file = files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        if (e.target && typeof e.target.result === "string") {
          try {
            const jsonData = JSON.parse(e.target.result);

            if (validate(jsonData)) {
              setTableData(jsonData.data);
              setOptionalData(jsonData.optionalData);
              setMessage("", "success");
            } else {
              setMessage("Invalid JSON structure", "error");
            }
          } catch (error) {
            console.error("Error parsing JSON", error);
            setMessage("Invalid JSON structure", "error");
          }
        }
      };
      reader.readAsText(file);
    }
  };

  function setMessage(errMsg: string, uploadStatus: "success" | "error") {
    setErrorMessage(errMsg);
    setUploadStatus(uploadStatus);
    setTimeout(() => setUploadStatus("idle"), 3000); // Reset after 3 seconds
  }

  return (
    <div className="mt-4">
      <UploadFrame
        onUpload={handleTemplateUpload}
        uploadStatus={uploadStatus}
        errorMessage={errorMessage}
      />
    </div>
  );
};

export default UploadTemplate;
