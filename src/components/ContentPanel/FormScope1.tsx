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

const FormScope1 = ({
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
  return (
    <>
      {" "}
      <p className="col-start-1 row-start-1 text-xs font-bold font-roboto ml-1">
        Activity
      </p>
      <select
        onChange={handleTypeChange}
        className="input-custom col-start-1"
        value={selectedType}
      >
        <option value="" disabled selected hidden>
          Select activity
        </option>
        {typeList.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <p className="col-start-2 row-start-1 text-xs font-bold font-roboto ml-1">
        Emission source
      </p>
      <select
        onChange={handleNameChange}
        className="input-custom col-start-2"
        value={selectedName}
      >
        <option value="" disabled selected hidden>
          Select source
        </option>
        {nameList.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
      <p className="col-start-3 row-start-1 text-xs font-bold font-roboto ml-1">
        Consumption
      </p>
      <input type="text" className="input-custom col-start-3" />
      <p className="col-start-4 row-start-1 text-xs font-bold font-roboto ml-1">
        Consumption unit
      </p>
      <select
        onChange={handleUnitChange}
        className="input-custom col-start-4"
        value={selectedUnit}
      >
        <option value="" disabled selected hidden>
          Select unit
        </option>
        {unitList.map((unit) => (
          <option key={unit} value={unit}>
            {unit}
          </option>
        ))}
      </select>
      <p className="col-start-5 row-start-1 text-xs font-bold font-roboto ml-1">
        Data source
      </p>
      <input type="text" className="input-custom col-start-5" />
    </>
  );
};

export default FormScope1;
