import { Children, useEffect, useState } from "react";
import data from "../../configs/DefaultTemplate.json";

interface Fuel {
  id: string;
  name: string;
  units: string[];
}

interface Scope {
  [fuelType: string]: Fuel;
}

interface Data {
  "Scope 1": Scope;
  "Scope 2": Scope;
  "Scope 3": Scope;
}

const InputForm = () => {
  const [emissionSourcesList, setEmissionSourcesList] = useState<string[]>([]);
  const [selectedScope, setSelectedScope] = useState<string>("Scope 1");

  useEffect(() => {
    handleSelectChange("Scope 1");
  }, []);

  const scopesArray = ["Scope 1", "Scope 2", "Scope 3"];

  const handleSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement> | string
  ) => {
    const scope = typeof event === "string" ? event : event.target.value;
    setSelectedScope(scope);

    const selectedScope: keyof Data | null = scope as keyof Data | null;

    const newOptions = selectedScope ? Object.keys(data[selectedScope]) : [];
    setEmissionSourcesList(newOptions);
  };

  return (
    <>
      <div className="border border-spacing-1 rounded-md my-3 p-4">
        {/* --- Header --- */}
        <select
          onChange={handleSelectChange}
          className="select-custom font-bold"
        >
          {scopesArray.map((scope) => (
            <option key={scope} value={scope}>
              {scope}
            </option>
          ))}
        </select>
        <p className="block text-xs font-roboto text-gray-500 font-normal mb-2 ml-1">
          {selectedScope == scopesArray[0] && "Direct GHG emissions"}
          {selectedScope == scopesArray[1] &&
            "Indirect GHG emissions associated with the purchase of electricity, steam, heat, or cooling"}
          {selectedScope == scopesArray[2] && "Other indirect GHG emissions"}
        </p>

        {/* --- Form --- */}

        <form className="grid grid-cols-layoutFormGrid">
          <p className="col-start-1 row-start-1 text-xs font-bold font-roboto ml-1">
            Emission source
          </p>
          <select className="input-custom col-start-1">
            <option disabled selected>
              Select emission source
            </option>
            {emissionSourcesList.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <p className="col-start-2 row-start-1 text-xs font-bold font-roboto ml-1">
            Consumption
          </p>
          <input type="text" className="input-custom col-start-2" />
          <p className="col-start-3 row-start-1 text-xs font-bold font-roboto ml-1">
            Consumption unit
          </p>
          <input type="text" className="input-custom col-start-3" />
          <p className="col-start-4 row-start-1 text-xs font-bold font-roboto ml-1">
            Data source
          </p>
          <input type="text" className="input-custom col-start-4" />
          <button className="btn border-gray-300 btn-square min-h-8 size-8 btn-outline col-start-5 row-start-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="square"
                strokeLinejoin="miter"
                strokeWidth="3"
                d="M12 2v20M2 12h20"
              />
            </svg>
          </button>
        </form>
      </div>
    </>
  );
};

export default InputForm;
