import { useEffect, useState } from "react";
import DataTable from "./DataTable";
import InputForm from "./InputForm";
import { customData } from "./FormBody";

const ContentContainer = () => {
  const [data, setData] = useState<customData[]>(() => {
    const storedData = localStorage.getItem("tableData");
    return storedData ? JSON.parse(storedData) : [];
  });
  const [fromScratch, setFromScratch] = useState(false); // Assuming data is an array of form submissions

  const [deletingIndex, setDeletingIndex] = useState<number | null>(null);

  const handleRowDelete = (index: number) => {
    setDeletingIndex(index);
    setTimeout(() => {
      const newData = data.filter((item, i) => i !== index);
      setData(newData);
      setDeletingIndex(null);
    }, 500); // Match this duration to your CSS transition
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
    <div className="grid grid-cols-1 grid-rows-layoutContentPanel p-6 bg-white xl:ml-4 ml-8 mr-8 rounded-2xl shadow-lg hover:shadow-xl transition-all h-full">
      <p className="text-lg font-roboto font-bold">
        Data Table
        <span className="block text-xs font-roboto text-gray-500 font-normal">
          Report data for any year
        </span>
      </p>

      <InputForm setData={setData} />
      <DataTable
        data={data}
        fromScratch={fromScratch}
        handleRowDelete={handleRowDelete}
        deletingIndex={deletingIndex}
      />
      <div className="flex justify-center">
        <button className="btn btn-neutral bg-primary hover:bg-primary shadow-lg rounded-lg w-1/4 min-h-8 h-6 font-roboto font-normal text-white">
          Download to file
        </button>
      </div>
    </div>
  );
};

export default ContentContainer;
