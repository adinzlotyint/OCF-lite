interface Props {
  emissionSourcesList: string[];
}

const FormScope2 = ({ emissionSourcesList }: Props) => {
  return (
    <>
      {" "}
      <p className="col-start-1 row-start-1 text-xs font-bold font-roboto ml-1">
        Energy type
      </p>
      <input type="text" className="input-custom col-start-1" />
      <p className="col-start-2 row-start-1 text-xs font-bold font-roboto ml-1">
        Emission source
      </p>
      <select className="input-custom col-start-2">
        <option disabled selected>
          Select source
        </option>
        {emissionSourcesList.map((option) => (
          <option key={option} value={option}>
            {option}
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
      <input type="text" className="input-custom col-start-4" />
      <p className="col-start-5 row-start-1 text-xs font-bold font-roboto ml-1">
        Data source
      </p>
      <input type="text" className="input-custom col-start-5" />
    </>
  );
};

export default FormScope2;
