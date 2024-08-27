import { useContext, useState } from "react";
import UploadFrame from "./BeforeTemplateUploadFrame";
import Ajv from "ajv";
import schema from "../../interfaces/json";
import { TableDataContext } from "../../hooks/Contexts";
import FileFrame from "./AfterTemplateUploadFrame";

const ajv = new Ajv();
const validate = ajv.compile(schema);

const UploadTemplate = () => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const { setTableData } = useContext(TableDataContext);

  const handleTemplateUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length === 1) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        if (e.target && typeof e.target.result === "string") {
          try {
            const jsonData = JSON.parse(e.target.result);

            if (validate(jsonData)) {
              setSelectedFile(file.name);
              setTableData(jsonData.data);
            } else {
              console.error("Invalid JSON structure", validate.errors);
            }
          } catch (error) {
            console.error("Error parsing JSON", error);
          }
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="mt-4">
      {!selectedFile ? (
        <UploadFrame onUpload={handleTemplateUpload} />
      ) : (
        <FileFrame fileName={selectedFile} />
      )}
    </div>
  );
};

export default UploadTemplate;
