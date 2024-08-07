import { useState } from "react";
import UploadFrame from "./UploadFrame";
import RemoveFrame from "./RemoveFrame";

const UploadTemplate = () => {
  const [file, setFile] = useState<File | null>(null);
  const [showRemoveFrame, setShowRemoveFrame] = useState(false);

  const handleUpload = () => {};
  const handleRemove = () => {};

  return (
    <>
      <div className="animate-appear">
        <p className="ml-4 font-roboto text-base text-primary mt-4">
          Upload template
        </p>
        {!showRemoveFrame && (
          <UploadFrame onUpload={() => setShowRemoveFrame(true)}></UploadFrame>
        )}
        {showRemoveFrame && (
          <RemoveFrame></RemoveFrame>
          // onRemove={() => setShowRemoveFrame(false)}
        )}
      </div>
    </>
  );
};

export default UploadTemplate;
