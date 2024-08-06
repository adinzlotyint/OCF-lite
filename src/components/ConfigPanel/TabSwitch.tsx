interface Props {
  onSelectTab: (TabName: string) => void;
  activeTab: string;
}

const TabSwitch = ({ onSelectTab, activeTab }: Props) => {
  return (
    <>
      <div
        role="tablist"
        className="relative flex justify-between bg-bgcolor rounded-lg p-1 mt-6 shadow-inner"
      >
        <button
          onClick={() => {
            onSelectTab("scratch");
            console.log("scratch");
          }}
          className={`relative z-20 flex-1 py-1 px-4 rounded-lg transition-colors duration-300 xl:text-xs 2xl:text-base  ${
            activeTab === "scratch" ? "text-white" : "text-primary"
          }`}
        >
          Create From Scratch
        </button>
        <button
          onClick={() => {
            onSelectTab("upload");
            console.log("upload");
          }}
          className={`relative z-20 flex-1 py-1 px-4 rounded-lg transition-colors duration-300 xl:text-xs 2xl:text-base ${
            activeTab === "upload" ? "text-white" : "text-primary"
          }`}
        >
          Upload Existing Data
        </button>
        <div
          className={`z-10 absolute top-0 bottom-0 left-1 mt-1 mb-1 mx-1 w-[calc(50%-0.5rem)] bg-primary shadow-lg rounded-lg transition-transform duration-300 ${
            activeTab === "upload" ? "translate-x-full" : ""
          }`}
        ></div>
      </div>
    </>
  );
};

export default TabSwitch;

// className={`z-10 absolute top-0 bottom-0 left-0 w-1/2 bg-primary rounded-lg transition-transform duration-300 ${
