const RadioButtons = () => {
  return (
    <>
      <div className="ml-4">
        <p className="font-roboto text-base text-primary mt-4">
          Select template
        </p>

        <div className="flex items-center mt-1">
          <input
            type="radio"
            name="radio-1"
            className="ml-2 radio w-4 h-4"
            defaultChecked
          />
          <span className="label-text ml-2 xl:text-xs 2xl:text-sm">
            Default template
          </span>
        </div>
        <div className="flex items-center justify-normal mt-2">
          <input type="radio" name="radio-1" className="ml-2 radio w-4 h-4" />
          <span className="label-text ml-2 xl:text-xs 2xl:text-sm">
            Custom template
          </span>
        </div>
      </div>
    </>
  );
};

export default RadioButtons;
