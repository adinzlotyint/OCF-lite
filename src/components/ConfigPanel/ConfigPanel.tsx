import UploadTemplate from "./UploadTemplate.tsx";
import UploadData from "./UploadData.tsx";
// import Logo from "../../assets/Logo.tsx";
import { FaReact } from "react-icons/fa";

const ConfigPanel = () => {
  return (
    <div className="flex flex-col bg-white mb-8 xl:mb-0 mt-8 xl:mr-4 sm:mr-[25%] mr-0 xl:ml-8 sm:ml-[25%] ml-0 p-6 rounded-none sm:rounded-xl shadow-lg hover:shadow-xl transition-all">
      <div className="w-full rounded-xl bg-primary flex justify-center mb-2 h-[200px]">
        {/* <Logo className="h-full"></Logo> */}
        <FaReact color="white" className="h-full w-1/2" />
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
    </div>
  );
};

export default ConfigPanel;
