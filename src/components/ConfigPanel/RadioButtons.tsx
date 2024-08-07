import { motion } from "framer-motion";

interface Props {
  onChange: (state: string) => void;
}

const RadioButtons = ({ onChange }: Props) => {
  return (
    <>
      <div>
        <p className="font-roboto text-base text-primary mt-4">
          Select template
        </p>
        <div className="grid grid-cols-2 grid-rows-1 items-center mt-1">
          <div className="flex items-center">
            <motion.label
              className="flex items-center cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <input
                type="radio"
                name="radio-1"
                id="radio-default"
                className="radio w-4 h-4 static"
                onClick={() => onChange("Default")}
                defaultChecked
              />
              <span className="label-text xl:text-xs 2xl:text-sm ml-2">
                Default template
              </span>
            </motion.label>
          </div>

          <div className="flex items-center">
            <motion.label
              className="flex items-center cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <input
                type="radio"
                name="radio-1"
                className="radio w-4 h-4 static"
                onClick={() => onChange("Upload")}
              />
              <span className="label-text xl:text-xs 2xl:text-sm ml-2">
                Custom template
              </span>
            </motion.label>
          </div>
        </div>
      </div>
    </>
  );
};

export default RadioButtons;
