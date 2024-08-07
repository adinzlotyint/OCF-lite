import { useState } from "react";
import { FaReact } from "react-icons/fa";
import TabSwitch from "./TabSwitch.tsx";
import RadioButtons from "./RadioButtons";
import UploadTemplate from "./UploadTemplate.tsx";

const ConfigPanel = () => {
  const [uploadTab, setUploadTab] = useState("upload");
  const [uploadTemplate, setUploadTemplate] = useState("Default");

  return (
    <div className="flex flex-col bg-white mt-8 xl:mr-4 mr-8 mb-8 ml-8 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
      <div className="w-full h-24 sm:h-32 xl:h-36 2xl:h-48 max-h-48 rounded-2xl bg-primary flex justify-center">
        <FaReact
          className="object-fill w-auto h-full p-4 sm:p-6 xl:p-8 2xl:p-12"
          color="white"
        />
      </div>
      <RadioButtons onChange={(state) => setUploadTemplate(state)} />
      {uploadTemplate == "Upload" && <UploadTemplate />}
      <TabSwitch
        uploadTab={uploadTab}
        onSelectTab={(TabName) => setUploadTab(TabName)}
      />
    </div>
  );
};

export default ConfigPanel;
