import React from "react";
import { customData } from "./FormBody";
import { FaTrashAlt } from "react-icons/fa";

interface DataTableProps {
  data: customData[];
  fromScratch: boolean;
}

const DataTable: React.FC<DataTableProps> = ({
  data,
  fromScratch,
}: DataTableProps) => {
  return (
    <div className="border border-spacing-1 rounded-xl mb-3 overflow-auto">
      <table className="table table-fixed font-roboto w-full">
        <thead>
          <tr>
            <th className="w-2/12 min-w-6">Activity</th>
            <th className="w-2/12 min-w-6">Emission Source</th>
            <th className="w-2/12 min-w-6">Consumption</th>
            <th className="w-1/12 min-w-6">Unit</th>
            <th className="w-auto min-w-6">Data Source</th>
            <th className="w-1/12 min-w-6"></th>
          </tr>
        </thead>
        <tbody className="text-xs">
          {data.map((item, index) => (
            <tr key={index}>
              <td className="break-words">{item.activity}</td>
              <td className="break-words">{item.emissionSource}</td>
              <td className="break-words">{item.consumption}</td>
              <td className="break-words">{item.unit}</td>
              <td className="break-words whitespace-normal">
                {item.dataSource}
              </td>
              <td className="text-end">
                <button className="btn-xs">
                  <FaTrashAlt className="text-lg" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
