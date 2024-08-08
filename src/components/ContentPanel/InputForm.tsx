import { MdAddBox } from "react-icons/md";
import { IconContext } from "react-icons";

const InputForm = () => {
  return (
    <>
      <div className="border border-spacing-1 rounded-md my-3 p-4">
        <p className="font-bold">Scope 1</p>
        <p className="block text-xs font-roboto text-gray-500 font-normal mb-2">
          Direct greenhouse (GHG) emissions
        </p>
        <div className="grid grid-cols-layoutFormGrid grid-rows-[auto,1fr]">
          <p className="col-start-1 row-start-1 text-xs font-bold font-roboto ml-1">
            Emission source
          </p>
          <p className="col-start-2 row-start-1 text-xs font-bold font-roboto ml-1">
            Consumption
          </p>
          <p className="col-start-3 row-start-1 text-xs font-bold font-roboto ml-1">
            Consumption unit
          </p>
          <p className="col-start-4 row-start-1 text-xs font-bold font-roboto ml-1">
            Data source
          </p>
          <input type="text" className="input-custom col-start-1" />
          <input type="text" className="input-custom col-start-2" />
          <input type="text" className="input-custom col-start-3" />
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
          {/* <MdAddBox className="col-start-5 row-start-2 size-8" /> */}
        </div>
      </div>
    </>
  );
};

export default InputForm;
