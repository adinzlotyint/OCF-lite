import React, { useState } from "react";

interface Props {
  onChange: (state: string) => void;
}

const UploadExistingDataCheckbox = ({ onChange }: Props) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onChange(isChecked ? "Default" : "Upload");
  };

  return (
    <>
      <div>
        <div className="flex border border-spacing-1 border-dashed h-10 rounded-xl justify-between items-center mt-4">
          <p className="font-roboto text-sm font-bold text-primary ml-2">
            Upload existing data
          </p>
          <input
            type="checkbox"
            className="toggle mr-2"
            onChange={handleCheckboxChange}
          />
        </div>
      </div>
    </>
  );
};

export default UploadExistingDataCheckbox;
