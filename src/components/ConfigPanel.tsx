import { useState } from "react";
import { FaReact } from "react-icons/fa";
import TabSwitch from "./TabSwitch";

const ConfigPanel = () => {
  const [activeTab, setActiveTab] = useState("upload"); // Default active tab

  return (
    <div className="flex flex-col bg-white mt-8 xl:mr-4 mr-8 mb-8 ml-8 p-6 rounded-2xl h-96 shadow-lg hover:shadow-xl transition-all">
      <div className="w-full h-24 sm:h-32 xl:h-36 2xl:h-48 max-h-48 rounded-2xl bg-primary flex justify-center">
        <FaReact
          className="object-fill w-auto h-full p-4 sm:p-6 xl:p-8 2xl:p-12"
          color="white"
        />
      </div>
      <TabSwitch
        activeTab={activeTab}
        onSelectTab={(TabName) => setActiveTab(TabName)}
      />
    </div>
  );
};

export default ConfigPanel;
