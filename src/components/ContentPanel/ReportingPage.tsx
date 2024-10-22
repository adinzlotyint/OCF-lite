import { useContext, useEffect, useState } from "react";
import DataTable from "./ReportingPage/DataTable";
import InputForm from "./ReportingPage/InputForm";
import SearchButton from "./ReportingPage/SearchButton";
import RemoveAllButton from "./ReportingPage/RemoveAllButton";
import { useCreateJSON } from "../../hooks/CreateJSON";
import {
  TableData,
  TableDataContext,
  LastRemovedItemsContext,
} from "../../hooks/Contexts";
import { FaCog } from "react-icons/fa";
import OptionalDataSection from "./ReportingPage/OptionalDataSection";

interface Props {
  showConfigPanel: () => void;
}

const ContentContainer = ({ showConfigPanel }: Props) => {
  const download = useCreateJSON();
  const { tableData, setTableData } = useContext(TableDataContext);
  const [deletingIndex, setDeletingIndex] = useState<number | null>(null);
  const [filteredData, setFilteredData] = useState<TableData[]>([]);
  const [searchText, setSearchText] = useState("");
  const { LastRemovedItems, setLastRemovedItems } = useContext(
    LastRemovedItemsContext
  );

  // const fromScratch = false;
  const handleRowDelete = (index: number) => {
    const itemToDelete = filteredData[index];
    setDeletingIndex(index);
    setLastRemovedItems({ item: itemToDelete, index }); // Track the last deleted item as a single item
    setTimeout(() => {
      const newData = tableData.filter((item) => item !== itemToDelete);
      setTableData(newData);
      setDeletingIndex(null);
    }, 500);
  };

  useEffect(() => {
    const storedData = localStorage.getItem("tableData");
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        setTableData(parsedData);
      } catch (error) {
        console.error("Failed to parse data:", error);
      }
    }
  }, []);

  // Save data to Local Storage whenever it changes
  useEffect(() => {
    localStorage.setItem("tableData", JSON.stringify(tableData));
    updateFilteredData();
  }, [tableData]);

  const handleRemoveAll = () => {
    if (tableData.length > 0) {
      setLastRemovedItems({ item: tableData, index: null }); // Save all data before removing
      setTableData([]); // Clear the data
    }
  };
  const updateFilteredData = () => {
    const lowerValue = searchText.toLowerCase();
    const searchedData = tableData.filter((item) => {
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

  const handleRestore = () => {
    if (LastRemovedItems.item) {
      if (Array.isArray(LastRemovedItems.item)) {
        // Restore all data if it was a "Remove All" action
        setTableData(LastRemovedItems.item);
      } else if (LastRemovedItems.index !== null) {
        // Restore a single deleted item
        const newData = [...tableData];
        newData.splice(LastRemovedItems.index, 0, LastRemovedItems.item);
        setTableData(newData);
      }
      setLastRemovedItems({ item: null, index: null }); // Clear the last deleted state after restoration
    }
  };

  return (
    <>
      <div className="flex flex-col h-full p-6 bg-white xl:ml-4 ml-0 sm:ml-8 sm:mr-8 mr-0 sm:rounded-xl rounded-none shadow-lg hover:shadow-xl transition-all">
        <div className="flex justify-between">
          <p className="text-lg font-roboto font-bold">
            Data Table
            <span className="block text-xs font-roboto text-gray-500 font-normal">
              Report your organization emissions data
            </span>
          </p>
          <div className="h-full flex items-center">
            <FaCog
              className="cursor-pointer"
              onClick={() => showConfigPanel()}
            />
          </div>
        </div>

        <InputForm
          setLastDeleted={() =>
            setLastRemovedItems({ item: null, index: null })
          }
        />

        <div className="flex-grow xl:min-h-[285px] sm:min-h-[100px] max-h-[500px] sm:max-h-[calc(100vh-500px)] overflow-hidden">
          <DataTable
            filteredData={filteredData}
            fromScratch={false}
            handleRowDelete={handleRowDelete}
            deletingIndex={deletingIndex}
            handleRestore={handleRestore}
            lastDeleted={LastRemovedItems.item} // Pass the last deleted item for RestoreLastChange component
          />
        </div>

        <div className="w-full h-50px">
          <OptionalDataSection className="border border-spacing-1 rounded-md my-3 p-4"></OptionalDataSection>
        </div>

        <div className="grid grid-rows-2 md:grid-rows-1 grid-cols-2 md:grid-cols-3 mt-4 justify-center items-center">
          <SearchButton
            onInputChange={(value) => setSearchText(value)}
            className="row-start-2 md:row-start-1 col-start-1 col-span-3 md:col-span-1 w-full md:w-[90%] mt-2 md:mt-0 mr-4"
          />
          <button
            className={`row-start-1 md:col-span-1 col-span-2 md:mb-0 btn btn-neutral ${
              tableData.length === 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-primary hover:bg-primary"
            } shadow-lg rounded-lg w-full min-h-8 h-8 font-roboto font-bold text-white place-self-center`}
            disabled={tableData.length === 0}
            onClick={() => download(tableData)}
          >
            Download to file
          </button>
          <div className="flex justify-end row-start-1 md:row-start-1 ml-3 md:ml-0">
            <RemoveAllButton className="" onClick={handleRemoveAll} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentContainer;
