import React from "react";
import { customData } from "./FormBody";

interface DataTableProps {
  data: customData[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  return (
    <div className="border border-spacing-1 rounded-xl mb-3">
      <table className="table">
        <thead>
          <tr>
            <th>Activity</th>
            <th>Emission Source</th>
            <th>Consumption</th>
            <th>Unit</th>
            <th>Data Source</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.activity}</td>
              <td>{item.emissionSource}</td>
              <td>{item.consumption}</td>
              <td>{item.unit}</td>
              <td>{item.dataSource}</td>
              <button className="btn btn-ghost btn-xs">remove</button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
