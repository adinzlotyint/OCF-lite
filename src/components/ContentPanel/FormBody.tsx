import AddButton from "./AddButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formValidation = z.object({
  Activity: z.string(),
  EmissionSource: z.string(),
  Consumption: z.string(),
  Unit: z.string(),
  DataSource: z.string(),
});

type FormData = z.infer<typeof formValidation>;

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(formValidation) });

  const onSubmit = (data: FormData) => {
    console.log("Form data:", data);
    // Add data to your table or state here
  };

  return (
    <>
      {" "}
      <p className="xl:col-start-1 xl:row-start-1 row-start-1 input-headers">
        Activity
      </p>
      <select
        {...register("Activity", {
          required: "This field is required",
          onChange: (e) => {
            handleTypeChange(e); // Call your custom onChange handler
          },
        })}
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
        {...register("EmissionSource", {
          required: "This field is required",
          onChange: (e) => {
            handleNameChange(e); // Call your custom onChange handler
          },
        })}
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
        {...register("Consumption", { required: "This field is required" })}
      />
      <p className="xl:col-start-4 xl:row-start-1 row-start-7 input-headers">
        Unit
      </p>
      <select
        {...register("Unit", {
          required: "This field is required",
          onChange: (e) => {
            handleUnitChange(e); // Call your custom onChange handler
          },
        })}
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
        {...register("DataSource", { required: "This field is required" })}
      />
      <AddButton
        onClick={handleSubmit(onSubmit)}
        className="btn  w-1/4 xl:w-8 border-gray-300 btn-square center min-h-8 size-8 btn-outline xl:col-start-6 col-start-1 xl:row-start-2 row-start-11 mt-3 xl:mt-0 mx-auto font-roboto hover:bg-primary"
      />
    </>
  );
};

export default FormBody;
