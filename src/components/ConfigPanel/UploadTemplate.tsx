import { useRef, useState } from "react";
import UploadFrame from "./UploadFrame";
import FileFrame from "./FileFrame";
import { motion } from "framer-motion";

interface Props {
  isVisible: string;
}

const UploadTemplate = ({ isVisible }: Props) => {
  const [selectedFile, setSelectedFile] = useState<boolean | object>(false);
  const [progressbar, setProgressbar] = useState(0);
  const [uploadStatus, setUploadStatus] = useState(false); // select | upload | remove
  const [fileName, setFileName] = useState("");

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (
      event.target.files &&
      [...event.target.files].some((file) => file.type !== "application/json")
    ) {
      console.log("Invalid file type");
    } else if (event.target.files && event.target.files[0].size > 1000000) {
      console.log("File size too large");
    } else if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
      setFileName(event.target.files[0].name);
    }
  };
  const handleRemove = () => {};

  return (
    <>
      <motion.div
        animate={
          isVisible == "Upload"
            ? { opacity: 1, display: "block" }
            : { opacity: 0, transitionEnd: { display: "none" } }
        }
      >
        <p className="font-roboto text-base text-primary mt-4">
          Upload template
        </p>
        {!selectedFile && <UploadFrame onUpload={handleUpload} />}
        {selectedFile && <FileFrame fileName={fileName} />}
      </motion.div>
    </>
  );
};

export default UploadTemplate;
