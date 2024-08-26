import { useState } from "react";
import UploadFrame from "./BeforeTemplateUploadFrame";
import Ajv, { JSONSchemaType } from "ajv";

interface Template {
  id: string;
  name: string;
}

const ajv = new Ajv();

const templateSchema: JSONSchemaType<Template[]> = {
  type: "array",
  items: {
    type: "object",
    properties: {
      id: { type: "string" },
      name: { type: "string" },
    },
    required: ["id", "name"],
    additionalProperties: true,
  },
};

const validateTemplate = ajv.compile(templateSchema);

const UploadData = () => {
  const [selectedFile, setSelectedFile] = useState<Template[]>([]);

  // Function to store the uploaded file in the state and update the dropdown lists accordingly
  const handleTemplateUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length === 1) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        if (e.target && typeof e.target.result === "string") {
          try {
            const jsonData = JSON.parse(e.target.result);

            if (validateTemplate(jsonData)) {
              setSelectedFile(jsonData);
              console.log(jsonData);
            } else {
              console.error("Invalid JSON structure", validateTemplate.errors);
              // Handle invalid JSON structure (e.g., show an error message to the user)
            }
          } catch (error) {
            console.error("Error parsing JSON", error);
            // Handle JSON parse error (e.g., show an error message to the user)
          }
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <>
      <div className="mt-4">
        {selectedFile.length === 0 && (
          <UploadFrame onUpload={handleTemplateUpload} />
        )}
        {/* {selectedFile.length !== 0 && <FileFrame fileName={fileName} />} */}
      </div>
    </>
  );
};

export default UploadData;
