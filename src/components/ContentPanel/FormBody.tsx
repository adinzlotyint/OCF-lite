import { useState } from "react";
import AddButton from "./AddButton";

interface Props {
  nameList: string[];
  typeList: string[];
  unitList: string[];
  selectedUnit: string;
  selectedType: string;
  selectedName: string;
  handleTypeChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleNameChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleUnitChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const FormBody = ({
  nameList,
  typeList,
  unitList,
  selectedUnit,
  selectedType,
  selectedName,
  handleTypeChange,
  handleNameChange,
  handleUnitChange,
}: Props) => {
  const onSubmit = (data: FormData) => {
    console.log("Form data:", data);
    // Add data to your table or state here
  };

  const [errors, setErrors] = useState({
    activity: "",
    emissionSource: "",
    consumption: "",
    unit: "",
    dataSource: "",
  });

  const handleSubmit = () => {
    const newErrors = {
      activity: selectedType === "" ? "Please select an activity" : "",
      emissionSource:
        selectedName === "" ? "Please select an emission source" : "",
      consumption: "",
      unit: selectedUnit === "" ? "Please select a unit" : "",
      dataSource: "",
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error !== "");

    if (!hasErrors) {
      console.log("Form submitted successfully");
    } else {
      console.log("Form has errors, not submitted");
    }
  };

  return (
    <>
      {" "}
      <p className="xl:col-start-1 xl:row-start-1 row-start-1 input-headers">
        Activity
      </p>
      <select
        onChange={handleTypeChange}
        className="input-custom xl:col-start-1 xl:row-start-2 row-start-2 col-start-1"
        value={selectedType}
      >
        <option value="" disabled selected hidden>
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
        className="input-custom xl:col-start-2 xl:row-start-2 row-start-4"
        value={selectedName}
      >
        <option value="" disabled selected hidden>
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
        className="input-custom xl:col-start-3 xl:row-start-2 row-start-6 pl-1"
      />
      <p className="xl:col-start-4 xl:row-start-1 row-start-7 input-headers">
        Unit
      </p>
      <select
        onChange={handleUnitChange}
        className="input-custom xl:col-start-4 xl:row-start-2 row-start-8"
        value={selectedUnit}
      >
        <option value="" disabled selected hidden>
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
        type="text"
        className="input-custom xl:col-start-5 xl:row-start-2 row-start-10 pl-1"
      />
      <AddButton
        onClick={handleSubmit}
        className="btn  w-1/4 xl:w-8 border-gray-300 btn-square center min-h-8 size-8 btn-outline xl:col-start-6 col-start-1 xl:row-start-2 row-start-11 mt-3 xl:mt-0 mx-auto font-roboto hover:bg-primary"
      />
    </>
  );
};

export default FormBody;
