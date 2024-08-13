import React from "react";

interface Props {
  handleScopeChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  selectedScope: string;
  scopesArray: string[];
}

const FormHeader = ({
  handleScopeChange,
  selectedScope,
  scopesArray,
}: Props) => {
  return (
    <>
      {" "}
      {/* font-roboto menu menu-sm dropdown-content bg-primary text-white rounded-box z-[1] mt-3 w-64 xl:w-52 p-2 shadow-lg */}
      <select onChange={handleScopeChange} className="select-custom font-bold">
        <option value="" disabled selected hidden>
          Select scope
        </option>
        {scopesArray.map((scope) => (
          <option key={scope} value={scope} className="bg-primary text-white">
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
    </>
  );
};

export default FormHeader;
