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

export type SelectsTemplate = {
  [scope: string]: {
    [type: string]: {
      [name: string]: string[];
    };
  };
};

type SelectsTemplateContextType = {
  selectsTemplate: SelectsTemplate;
  setSelectsTemplate: React.Dispatch<React.SetStateAction<SelectsTemplate>>;
};

export const SelectsTemplateContext = createContext<SelectsTemplateContextType>(
  {
    selectsTemplate: {},
    setSelectsTemplate: () => {},
  }
);

export type LastRemovedItems = {
  item: TableData | TableData[] | null; // Allow item to be either a single item or an array
  index: number | null;
};

type LastRemovedItemsContextType = {
  LastRemovedItems: LastRemovedItems;
  setLastRemovedItems: React.Dispatch<React.SetStateAction<LastRemovedItems>>;
};

export const LastRemovedItemsContext =
  createContext<LastRemovedItemsContextType>({
    LastRemovedItems: {
      item: null,
      index: null,
    },
    setLastRemovedItems: () => {},
  });
