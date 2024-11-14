import { useContext, useEffect } from "react";
import { countries } from "../../../configs/CountriesList";
import { OptionalDataContext } from "../../../hooks/Contexts";

interface Props {
  className: string;
}

const OptionalDataSection = ({ className }: Props) => {
  const { optionalData, setOptionalData } = useContext(OptionalDataContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setOptionalData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const storedOptionalData = localStorage.getItem("optionalData");
    if (storedOptionalData) {
      try {
        const parsedOptionalData = JSON.parse(storedOptionalData);
        setOptionalData(parsedOptionalData);
      } catch (error) {
        console.error("Failed to parse data:", error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("optionalData", JSON.stringify(optionalData));
  }, [optionalData]);

  return (
    <>
      <div className={className}>
        <p className="text-lg font-roboto font-bold">
          Additional Information
          <span className="block text-xs font-roboto text-tetriary font-normal">
            Providing this information will help to identify the source of the
            data. All fields below are optional.
          </span>
        </p>
        <div className="flex justify-between mt-4">
          <input
            type="number"
            className="input-custom mr-4"
            placeholder="Enter the reported year"
            name="year"
            min="1900"
            max="2099"
            step="1"
          />
          <input
            type="text"
            className="input-custom mr-4"
            placeholder="Enter the country where the data originates"
            list="countries"
            name="country"
            value={optionalData.country}
            onChange={handleChange}
          />
          <datalist id="countries">
            {countries.map((country) => (
              <option key={country} value={country} />
            ))}
          </datalist>
          <input
            type="text"
            className="input-custom mr-4"
            placeholder="Enter the company's name"
            name="company"
            value={optionalData.company}
            onChange={handleChange}
          />
          <input
            type="text"
            className="input-custom mr-4"
            placeholder="Enter your full name"
            name="fullName"
            value={optionalData.fullName}
            onChange={handleChange}
          />
          <input
            type="text"
            className="input-custom"
            placeholder="Enter your job email address"
            name="email"
            value={optionalData.email}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
};

export default OptionalDataSection;
