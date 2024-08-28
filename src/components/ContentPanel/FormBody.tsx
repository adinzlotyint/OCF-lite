import { useContext, useEffect, useState } from "react";
import AddButton from "./AddButton";
import { SelectsTemplateContext, TableDataContext } from "../../hooks/Contexts";

interface Props {
  nameList: string[];
  typeList: string[];
  unitList: string[];
  selectedUnit: string;
  selectedType: string;
  selectedName: string;
  selectedScope: string;
  handleTypeChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleNameChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleUnitChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  changeError: (errors: {
    activity: string;
    emissionSource: string;
    consumption: string;
    unit: string;
    dataSource: string;
  }) => void;
  clearForm: () => void;
  setLastDeleted: () => void;
}

export interface customData {
  scope: string;
  activity: string;
  emissionSource: string;
  consumption: string;
  unit: string;
  dataSource: string;
}

const FormBody = ({
  nameList,
  typeList,
  unitList,
  selectedUnit,
  selectedType,
  selectedName,
  selectedScope,
  handleTypeChange,
  handleNameChange,
  handleUnitChange,
  changeError,
  setLastDeleted,
  clearForm,
}: Props) => {
  const { selectsTemplate } = useContext(SelectsTemplateContext);
  const { tableData, setTableData } = useContext(TableDataContext);
  const [dataSource, setDataSource] = useState<string>("");
  const [consumption, setConsumption] = useState<string>("");

  const handleDataSourceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDataSource(event.target.value);
  };

  const handleConsumptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConsumption(event.target.value);
  };

  const handleSubmit = () => {
    const newErrors = {
      activity: selectedType === "" ? "Please select an activity" : "",
      emissionSource:
        selectedName === ""
          ? "Please select an emission source"
          : tableData.filter((item) => item.emissionSource === selectedName)
              .length > 0
          ? "Emission source already exists"
          : "",
      consumption:
        consumption === ""
          ? "Please enter a consumption"
          : isNaN(Number(consumption))
          ? "Please enter a valid number"
          : "",
      unit: selectedUnit === "" ? "Please select a unit" : "",
      dataSource: dataSource === "" ? "Please enter a data source" : "",
    };
    changeError(newErrors);

    if (
      newErrors.activity === "" &&
      newErrors.emissionSource === "" &&
      newErrors.consumption === "" &&
      newErrors.unit === "" &&
      newErrors.dataSource === ""
    ) {
      const customData = {
        scope: selectedScope,
        activity: selectedType,
        emissionSource: selectedName,
        consumption: consumption,
        unit: selectedUnit,
        dataSource: dataSource,
      };
      setTableData((prevData) => [customData, ...prevData]);
      clearForm();
      setDataSource("");
      setConsumption("");
      setLastDeleted();
    }
  };

  useEffect(() => {
    clearForm();
    setDataSource("");
    setConsumption("");
  }, [selectsTemplate]);

  return (
    <>
      {" "}
      <p className="xl:col-start-1 xl:row-start-1 row-start-1 input-headers">
        Activity
      </p>
      <select
        onChange={handleTypeChange}
        className="select-custom mt-1 xl:col-start-1 xl:row-start-2 row-start-2 col-start-1"
        value={selectedType}
        disabled={typeList.length === 0}
      >
        <option value="" disabled hidden>
          Select activity
        </option>
        {typeList.map((type) => (
          <option key={type} value={type} className="bg-primary text-white">
            {type}
          </option>
        ))}
      </select>
      <p className="xl:col-start-2 xl:row-start-1 row-start-3 input-headers">
        Emission source
      </p>
      <select
        onChange={handleNameChange}
        className="select-custom mt-1 xl:col-start-2 xl:row-start-2 row-start-4"
        value={selectedName}
        disabled={nameList.length === 0}
      >
        <option value="" disabled hidden>
          Select source
        </option>
        {nameList.map((name) => (
          <option key={name} value={name} className="bg-primary text-white">
            {name}
          </option>
        ))}
      </select>
      <p className="xl:col-start-3 xl:row-start-1 row-start-5 input-headers">
        Consumption
      </p>
      <input
        type="text"
        className="input-custom mt-1 xl:col-start-3 xl:row-start-2 row-start-6"
        value={consumption}
        onChange={handleConsumptionChange}
        placeholder="Enter consumption"
      />
      <p className="xl:col-start-4 xl:row-start-1 row-start-7 input-headers">
        Unit
      </p>
      <select
        onChange={handleUnitChange}
        className="select-custom mt-1 xl:col-start-4 xl:row-start-2 row-start-8"
        value={selectedUnit}
        disabled={unitList.length === 0}
      >
        <option value="" disabled hidden>
          Select unit
        </option>
        {unitList.map((unit) => (
          <option key={unit} value={unit} className="bg-primary text-white">
            {unit}
          </option>
        ))}
      </select>
      <p className="xl:col-start-5 xl:row-start-1 row-start-9 input-headers">
        Data source
      </p>
      <input
        id="dataSource"
        type="text"
        className="input-custom mt-1 xl:col-start-5 xl:row-start-2 row-start-10"
        value={dataSource}
        onChange={handleDataSourceChange}
        placeholder="Enter data source"
      />
      <AddButton
        onClick={handleSubmit}
        className="btn rounded-md w-1/2 sm:w-1/4 xl:w-8 border-gray-300 btn-square center min-h-8 size-8 btn-outline xl:col-start-6 col-start-1 xl:row-start-2 row-start-11 mt-3 xl:mt-1 mx-auto font-roboto hover:bg-primary transition-all duration-300 ease-in-out"
      />
    </>
  );
};

export default FormBody;
