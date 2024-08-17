import React, { useState } from "react";
import { customData } from "./FormBody";
import { FaTrashAlt } from "react-icons/fa";
import "../../index.css";

interface DataTableProps {
  data: customData[];
  fromScratch: boolean;
  handleRowDelete: (index: number) => void;
  deletingIndex: number | null;
}

const DataTable: React.FC<DataTableProps> = ({
  data,
  handleRowDelete,
  deletingIndex,
}: DataTableProps) => {
  return (
    <div className="border border-spacing-1 rounded-lg mb-3 overflow-auto">
      <table className="table table-fixed font-roboto w-full">
        <thead>
          <tr>
            <th className="w-2/12 min-w-6">Activity</th>
            <th className="w-2/12 min-w-6">Emission Source</th>
            <th className="w-2/12 min-w-6">Consumption</th>
            <th className="w-1/12 min-w-6">Unit</th>
            <th className="w-auto min-w-6">Data Source</th>
            <th className="w-[5%] min-w-6 px-2"></th>
          </tr>
        </thead>
        <tbody className="text-xs">
          {data.map((item, index) => (
            <tr
              key={index}
              className={deletingIndex === index ? "fade-out" : ""}
            >
              <td className="break-words">{item.activity}</td>
              <td className="break-words">{item.emissionSource}</td>
              <td className="break-words">{item.consumption}</td>
              <td className="break-words">{item.unit}</td>
              <td className="break-words whitespace-normal">
                {item.dataSource}
              </td>
              <td className="pr-1 pl-0 align-middle text-center">
                <button onClick={() => handleRowDelete(index)}>
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
