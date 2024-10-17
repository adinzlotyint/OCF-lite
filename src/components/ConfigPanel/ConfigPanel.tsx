import { FaReact } from "react-icons/fa";
import { motion } from "framer-motion";
import UploadTemplate from "./UploadTemplate.tsx";
import UploadData from "./UploadData.tsx";
import OptionalDataSection from "./OptionalDataSection.tsx";

const ConfigPanel = () => {
  return (
    <div className="flex flex-col bg-white mb-8 2xl:mb-0 mt-8 2xl:ml-4 sm:mr-[25%] mr-0 2xl:mr-8 sm:ml-[25%] min-w-[50%] ml-0 p-6 rounded-none sm:rounded-2xl shadow-lg hover:shadow-xl transition-all">
      {/* Header section */}
      <div className="w-full rounded-2xl bg-primary flex justify-center mb-2">
        <div className="p-[1vw]">
          {/* Animated React icon */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 360 }}
            className="h-[10vh] flex items-center justify-center"
          >
            <FaReact className="w-full h-[4vw] min-h-16" color="white" />
          </motion.div>
        </div>
      </div>

      <div className="collapse collapse-arrow custom-accordion">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title text-base font-medium">
          Custom Drop-Down Content
          <span className="block text-xs font-roboto text-gray-500 font-normal">
            Upload a file to replace the current drop-down list content with
            your custom items.
          </span>
        </div>
        <div className="collapse-content">
          <UploadTemplate />
        </div>
      </div>
      <div className="collapse collapse-arrow custom-accordion">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-base font-medium">
          Import Previous Data
          <span className="block text-xs font-roboto text-gray-500 font-normal">
            Upload a file to import your data, replacing the current entries in
            table.
          </span>
        </div>
        <div className="collapse-content">
          <UploadData />
        </div>
      </div>
      <div className="collapse collapse-arrow custom-accordion">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-base font-medium">
          Add Optional Details
          <span className="block text-xs font-roboto text-gray-500 font-normal">
            Fill in the optional fields to include additional information in the
            file.
          </span>
        </div>
        <div className="collapse-content">
          <OptionalDataSection />{" "}
        </div>
      </div>
    </div>
  );
};

export default ConfigPanel;
