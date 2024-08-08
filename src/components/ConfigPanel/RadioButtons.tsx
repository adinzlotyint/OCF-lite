interface Props {
  onChange: (state: string) => void;
}

const RadioButtons = ({ onChange }: Props) => {
  return (
    <>
      <div>
        <p className="font-roboto text-sm font-bold text-primary mt-4">
          Select drop-down lists content
        </p>
        <div className="grid grid-cols-2 grid-rows-1 items-center mt-1">
          <div className="flex items-center">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="radio-1"
                id="radio-default"
                className="radio w-4 h-4 static"
                onClick={() => onChange("Default")}
                defaultChecked
              />
              <span className="label-text xl:text-sm 2xl:text-sm ml-2 font-roboto text-gray-700">
                Default emission sources
              </span>
            </label>
          </div>

          <div className="flex items-center">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="radio-1"
                className="radio w-4 h-4 static"
                onClick={() => onChange("Upload")}
              />
              <span className="label-text xl:text-sm 2xl:text-sm ml-2 font-roboto text-gray-700">
                Custom from file
              </span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default RadioButtons;
