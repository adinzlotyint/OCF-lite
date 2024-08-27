import { createContext } from "react";

export type OptionalData = {
  country: string;
  company: string;
  fullName: string;
  email: string;
};

type OptionalDataContextType = {
  optionalData: OptionalData;
  setOptionalData: React.Dispatch<React.SetStateAction<OptionalData>>;
};

export const OptionalDataContext = createContext<OptionalDataContextType>({
  optionalData: {
    country: "",
    company: "",
    fullName: "",
    email: "",
  },
  setOptionalData: () => {},
});

export type TableData = {
  scope: string;
  activity: string;
  emissionSource: string;
  consumption: string;
  unit: string;
  dataSource: string;
};

type TableDataContextType = {
  tableData: TableData[];
  setTableData: React.Dispatch<React.SetStateAction<TableData[]>>;
};

export const TableDataContext = createContext<TableDataContextType>({
  tableData: [
    {
      scope: "",
      activity: "",
      emissionSource: "",
      consumption: "",
      unit: "",
      dataSource: "",
    },
  ],
  setTableData: () => {},
});
