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
      <p className="xl:col-start-1 xl:row-start-1 row-start-1 text-xs font-bold font-roboto ml-1">
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
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <p className="xl:col-start-2 xl:row-start-1 row-start-3 text-xs font-bold font-roboto ml-1">
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
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
      <p className="xl:col-start-3 xl:row-start-1 row-start-5 text-xs font-bold font-roboto ml-1">
        Consumption
      </p>
      <input
        type="text"
        className="input-custom xl:col-start-3 xl:row-start-2 row-start-6"
      />
      <p className="xl:col-start-4 xl:row-start-1 row-start-7  text-xs font-bold font-roboto ml-1">
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
          <option key={unit} value={unit}>
            {unit}
          </option>
        ))}
      </select>
      <p className="xl:col-start-5 xl:row-start-1 row-start-9 text-xs font-bold font-roboto ml-1">
        Data source
      </p>
      <input
        type="text"
        className="input-custom xl:col-start-5 xl:row-start-2 row-start-10"
      />
    </>
  );
};

export default FormScope1;
