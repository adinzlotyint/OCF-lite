import { ReactNode } from "react";
import {
  OptionalDataContext,
  TableDataContext,
  SelectsTemplateContext,
  LastRemovedItemsContext,
} from "./Contexts";
import { useState } from "react";
import {
  OptionalData,
  TableData,
  SelectsTemplate,
  LastRemovedItems,
} from "./Contexts";
import DefaultTemplate from "../configs/DefaultTemplate.json";

type CombinedProviderProps = {
  children: ReactNode;
};

export const CombinedContexts = ({ children }: CombinedProviderProps) => {
  const [optionalData, setOptionalData] = useState<OptionalData>(() => {
    const storedOptionalData = localStorage.getItem("optionalData");
    return storedOptionalData
      ? JSON.parse(storedOptionalData)
      : {
          country: "",
          company: "",
          fullName: "",
          email: "",
        };
  });

  const [tableData, setTableData] = useState<TableData[]>(() => {
    const storedData = localStorage.getItem("tableData");
    return storedData ? JSON.parse(storedData) : [];
  });

  const [selectsTemplate, setSelectsTemplate] =
    useState<SelectsTemplate>(DefaultTemplate);

  const [LastRemovedItems, setLastRemovedItems] = useState<LastRemovedItems>({
    item: null,
    index: null,
  });

  return (
    <OptionalDataContext.Provider value={{ optionalData, setOptionalData }}>
      <TableDataContext.Provider value={{ tableData, setTableData }}>
        <SelectsTemplateContext.Provider
          value={{ selectsTemplate, setSelectsTemplate }}
        >
          <LastRemovedItemsContext.Provider
            value={{ LastRemovedItems, setLastRemovedItems }}
          >
            {children}
          </LastRemovedItemsContext.Provider>
        </SelectsTemplateContext.Provider>
      </TableDataContext.Provider>
    </OptionalDataContext.Provider>
  );
};
