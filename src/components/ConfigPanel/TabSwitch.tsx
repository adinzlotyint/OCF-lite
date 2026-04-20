interface Props {
  onSelectTab: (TabName: string) => void;
  uploadTab: string;
}

const TabSwitch = ({ onSelectTab, uploadTab }: Props) => {
  return (
    <>
      <div
        role="tablist"
        className="relative flex justify-between bg-bgcolor rounded-lg p-1 mt-4 shadow-inner"
      >
        <button
          onClick={() => onSelectTab("scratch")}
          className={`relative z-20 flex-1 py-1 px-4 rounded-lg transition-colors duration-300 text-xs 2xl:text-sm font-roboto ${
            uploadTab === "scratch" ? "text-white font-bold" : "text-primary"
          }`}
        >
          Create From Scratch
        </button>
        <button
          onClick={() => onSelectTab("upload")}
          className={`relative z-20 flex-1 py-1 px-4 rounded-lg transition-colors duration-300 text-xs 2xl:text-sm font-roboto ${
            uploadTab === "upload" ? "text-white font-bold" : "text-primary"
          }`}
        >
          Upload Existing Data
        </button>
        <div
          className={`z-10 absolute top-0 bottom-0 left-1 mt-1 mb-1 w-[calc(50%-0.25rem)] bg-primary shadow-lg rounded-md transition-transform duration-300 ${
            uploadTab === "upload" ? "translate-x-full" : ""
          }`}
        ></div>
      </div>
    </>
  );
};

export default TabSwitch;

// className={`z-10 absolute top-0 bottom-0 left-0 w-1/2 bg-primary rounded-lg transition-transform duration-300 ${
