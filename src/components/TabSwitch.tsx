interface Props {
  onSelectTab: (TabName: string) => void;
  activeTab: string;
}

const TabSwitch = ({ onSelectTab, activeTab }: Props) => {
  return (
    <>
      <div
        role="tablist"
        className="relative flex justify-between bg-gray-200 rounded-lg p-1 mt-6"
      >
        <button
          onClick={() => {
            onSelectTab("scratch");
            console.log("scratch");
          }}
          className={`relative z-20 flex-1 py-2 px-4 rounded-lg transition-colors duration-300 xl:text-xs 2xl:text-sm  ${
            activeTab === "scratch" ? "text-white" : "text-gray-700"
          }`}
        >
          Create From Scratch
        </button>
        <button
          onClick={() => {
            onSelectTab("upload");
            console.log("upload");
          }}
          className={`relative z-20 flex-1 py-2 px-4 rounded-lg transition-colors duration-300 xl:text-xs 2xl:text-sm ${
            activeTab === "upload" ? "text-white" : "text-gray-700"
          }`}
        >
          Upload Existing Data
        </button>
        <div
          className={`z-10 absolute top-0 bottom-0 left-0 w-1/2 bg-primary rounded-lg transition-transform duration-300 ${
            activeTab === "upload" ? "translate-x-full" : ""
          }`}
        ></div>
      </div>
    </>
  );
};

export default TabSwitch;
