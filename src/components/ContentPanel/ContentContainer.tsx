import DataTable from "./DataTable";
import InputForm from "./InputForm";

const ContentContainer = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-layoutContentPanel p-6 bg-white xl:ml-4 ml-8 mr-8 rounded-2xl shadow-lg hover:shadow-xl transition-all h-full">
      <p className="text-lg font-roboto font-bold">
        Data Table
        <span className="block text-xs font-roboto text-gray-500 font-normal">
          Report data for any year
        </span>
      </p>

      <InputForm />
      <DataTable />
      <div className="flex justify-center">
        <button className="btn btn-neutral bg-primary hover:bg-primary shadow-lg rounded-lg w-1/4 font-roboto font-normal text-white">
          Download to file
        </button>
      </div>
    </div>
  );
};

export default ContentContainer;
