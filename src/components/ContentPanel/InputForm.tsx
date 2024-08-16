import { useEffect, useState } from "react";
import data from "../../configs/DefaultTemplate.json";
import FormBody, { customData } from "./FormBody";
import FormHeader from "./FormHeader";

export interface Data {
  [scope: string]: {
    [type: string]: {
      [name: string]: {
        units: string[];
      };
    };
  };
}

interface InputFormProps {
  setData: React.Dispatch<React.SetStateAction<customData[]>>;
}

const InputForm: React.FC<InputFormProps> = ({ setData }) => {
  const [selectedScope, setSelectedScope] = useState<string>("Scope 1");
  const [selectedType, setSelectedType] = useState<string>("");
  const [selectedName, setSelectedName] = useState<string>("");
  const [selectedUnit, setSelectedUnit] = useState<string>("");
  const [typeList, setTypeList] = useState<string[]>([]);
  const [nameList, setNameList] = useState<string[]>([]);
  const [unitList, setUnitList] = useState<string[]>([]);

  const [errors, setErrors] = useState({
    activity: "",
    emissionSource: "",
    consumption: "",
    unit: "",
    dataSource: "",
  });

  const scopesArray = Object.keys(data);

  const someObj: Data = data;

  const handleScopeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const scope = event.target.value;
    setSelectedScope(scope);
    const types = Object.keys(someObj[scope]);
    setTypeList(types);
    setNameList([]);
    setUnitList([]);
    setSelectedType("");
    setSelectedName("");
    setSelectedUnit("");
  };

  useEffect(() => {
    const types = Object.keys(someObj["Scope 1"]);
    setTypeList(types);
  }, []);

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const type = event.target.value;
    setSelectedType(type);
    const emissionSources = Object.keys(someObj[selectedScope][type]);
    setNameList(emissionSources);
    setUnitList([]);
    setSelectedName("");
    setSelectedUnit("");
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const name = event.target.value;
    const emissionSources = someObj[selectedScope][selectedType][name].units;
    setUnitList(emissionSources);
    setSelectedName(name);
    setSelectedUnit("");
  };

  const handleUnitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const name = event.target.value;
    setSelectedUnit(name);
  };

  let errVal = "";
  const hasErrors = () => {
    Object.values(errors).some((error) =>
      error !== "" ? (errVal = error) : (errVal = "")
    );
    return errVal;
  };

  const clearForm = () => {
    setSelectedType("");
    setSelectedName("");
    setSelectedUnit("");
  };

  return (
    <>
      <div className="border border-spacing-1 rounded-md my-3 p-4">
        <FormHeader
          handleScopeChange={handleScopeChange}
          selectedScope={selectedScope}
          scopesArray={scopesArray}
        />
        <form className="grid xl:grid-cols-layoutFormGrid lg:grid-cols-1 lg:grid-rows-layoutFormGridlg">
          <FormBody
            nameList={nameList}
            typeList={typeList}
            unitList={unitList}
            selectedType={selectedType}
            selectedName={selectedName}
            selectedUnit={selectedUnit}
            handleTypeChange={handleTypeChange}
            handleNameChange={handleNameChange}
            handleUnitChange={handleUnitChange}
            setData={setData}
            changeError={(newErrors) => {
              setErrors(newErrors);
            }}
            clearForm={clearForm}
          />
        </form>
        {hasErrors() !== "" && (
          <p className="text-red-500 text-sm mt-2">{errVal}</p>
        )}
      </div>
    </>
  );
};

export default InputForm;
