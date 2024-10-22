import React from "react";
import { customData } from "./FormBody";
import { FaTrashAlt } from "react-icons/fa";
import "../../../index.css";
import RestoreLastChange from "./RestoreLastChange";

interface DataTableProps {
  fromScratch: boolean;
  handleRowDelete: (index: number) => void;
  deletingIndex: number | null;
  filteredData: customData[];
  handleRestore: () => void;
  lastDeleted: customData | customData[] | null;
}

const DataTable: React.FC<DataTableProps> = ({
  handleRowDelete,
  deletingIndex,
  filteredData,
  handleRestore,
  lastDeleted,
}: DataTableProps) => {
  return (
    <div className="h-full max-h-full overflow-x-auto">
      <table className="table table-pin-rows lg:table-fixed font-roboto w-full">
        <thead>
          <tr className="h-14">
            <th className="w-1/12 min-w-6">Scope</th>
            <th className="w-3/12 min-w-6">Activity</th>
            <th className="w-3/12 min-w-6">Emission Source</th>
            <th className="w-1/12 min-w-6">Consumption</th>
            <th className="w-1/12 min-w-6">Unit</th>
            <th className="w-3/12 min-w-6">Data Source</th>
            <th className="w-[5%] min-w-6 px-2 sticky right-0 bg-white">
              <RestoreLastChange
                onClick={handleRestore}
                visible={!!lastDeleted}
              />
            </th>
          </tr>
        </thead>
        <tbody className="text-xs overflow-y-auto">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <tr
                key={index}
                className={deletingIndex === index ? "fade-out" : ""}
              >
                <td className="break-words min-w-20">{item.scope}</td>
                <td className="break-words">{item.activity}</td>
                <td className="break-words">{item.emissionSource}</td>
                <td className="break-words">{item.consumption}</td>
                <td className="break-words">{item.unit}</td>
                <td className="break-all min-w-36">{item.dataSource}</td>
                <td className="p-2 text-center sticky right-0 bg-white">
                  <button onClick={() => handleRowDelete(index)}>
                    <FaTrashAlt className="text-lg" />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr className="border border-none">
              <td colSpan={7} className="text-center  text-gray-300 text-xl">
                No data available. Add some entries to populate the table.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
