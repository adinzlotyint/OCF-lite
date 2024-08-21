import { useEffect, useState } from "react";
import DataTable from "./DataTable";
import InputForm from "./InputForm";
import { customData } from "./FormBody";
import SearchButton from "./SearchButton";
import RemoveAllButton from "./RemoveAllButton";
import RestoreLastChange from "./RestoreLastChange";

const ContentContainer = () => {
  const [data, setData] = useState<customData[]>(() => {
    const storedData = localStorage.getItem("tableData");
    return storedData ? JSON.parse(storedData) : [];
  });
  const [deletingIndex, setDeletingIndex] = useState<number | null>(null);
  const [filteredData, setFilteredData] = useState<customData[]>([]);
  const [searchText, setSearchText] = useState("");

  // const fromScratch = false;

  const handleRowDelete = (index: number) => {
    const itemToDelete = filteredData[index];
    setDeletingIndex(index);
    setTimeout(() => {
      const newData = data.filter((item) => item !== itemToDelete);
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
    updateFilteredData();
  }, [data]);

  const handleRemoveAll = () => {
    setData([]);
  };

  const updateFilteredData = () => {
    const lowerValue = searchText.toLowerCase();
    const searchedData = data.filter((item) => {
      return (
        item.scope.toLowerCase().includes(lowerValue) ||
        item.activity.toLowerCase().includes(lowerValue) ||
        item.emissionSource.toLowerCase().includes(lowerValue) ||
        item.consumption.toLowerCase().includes(lowerValue) ||
        item.unit.toLowerCase().includes(lowerValue) ||
        item.dataSource.toLowerCase().includes(lowerValue)
      );
    });
    setFilteredData(searchedData);
  };

  useEffect(() => {
    updateFilteredData();
  }, [searchText]);

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
          filteredData={filteredData}
          fromScratch={false}
          handleRowDelete={handleRowDelete}
          deletingIndex={deletingIndex}
        />
      </div>

      <div className="grid grid-cols-3 mt-4 justify-center items-center">
        <SearchButton onInputChange={(value) => setSearchText(value)} />
        <button className="btn btn-neutral bg-primary hover:bg-primary shadow-lg rounded-lg w-full sm:w-3/4 min-h-8 h-8 font-roboto font-bold text-white place-self-center">
          Download to file
        </button>
        <div className="flex justify-end">
          <RestoreLastChange className="mr-2" />
          <RemoveAllButton className="" onClick={handleRemoveAll} />
        </div>
      </div>
    </div>
  );
};

export default ContentContainer;
