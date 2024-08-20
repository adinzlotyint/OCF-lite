import { useEffect, useState } from "react";
import DataTable from "./DataTable";
import InputForm from "./InputForm";
import { customData } from "./FormBody";

const ContentContainer = () => {
  const [data, setData] = useState<customData[]>(() => {
    const storedData = localStorage.getItem("tableData");
    return storedData ? JSON.parse(storedData) : [];
  });

  const fromScratch = false;

  const [deletingIndex, setDeletingIndex] = useState<number | null>(null);

  const handleRowDelete = (index: number) => {
    setDeletingIndex(index);
    setTimeout(() => {
      const newData = data.filter((_, i) => i !== index);
      setData(newData);
      setDeletingIndex(null);
    }, 500);
  };

  useEffect(() => {
    const storedData = localStorage.getItem("tableData");
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        setData(parsedData);
      } catch (error) {
        console.error("Failed to parse data:", error);
      }
    }
  }, []);

  // Save data to Local Storage whenever it changes
  useEffect(() => {
    console.log("Data updated:", data);
    localStorage.setItem("tableData", JSON.stringify(data));
  }, [data]);

  return (
    <div className="flex flex-col h-full p-6 bg-white 2xl:ml-4 ml-0 sm:ml-8 sm:mr-8 mr-0 sm:rounded-2xl rounded-none shadow-lg hover:shadow-xl transition-all">
      <p className="text-lg font-roboto font-bold">
        Data Table
        <span className="block text-xs font-roboto text-gray-500 font-normal">
          Report data for any year
        </span>
      </p>

      <InputForm setData={setData} />

      {/* Ensure this container can grow and allow scrolling */}
      <div className="flex-grow sm:min-h-[100px] max-h-[500px] sm:max-h-[calc(100vh-500px)] overflow-hidden">
        <DataTable
          data={data}
          fromScratch={false}
          handleRowDelete={handleRowDelete}
          deletingIndex={deletingIndex}
        />
      </div>

      <div className="flex justify-center mt-4">
        <button className="btn btn-neutral bg-primary hover:bg-primary shadow-lg rounded-lg w-1/2 sm:w-1/4 min-h-8 h-6 font-roboto font-normal text-white">
          Download to file
        </button>
      </div>
    </div>
  );
};

export default ContentContainer;
