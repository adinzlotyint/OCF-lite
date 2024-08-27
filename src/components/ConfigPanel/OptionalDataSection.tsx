import { useContext, useEffect } from "react";
import { countries } from "../../configs/CountriesList";
import { OptionalDataContext } from "../../hooks/Contexts";

const OptionalDataSection = () => {
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
    <div>
      <input
        type="text"
        className="input-custom mb-2"
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
        className="input-custom mb-2"
        placeholder="Enter the company's name"
        name="company"
        value={optionalData.company}
        onChange={handleChange}
      />
      <input
        type="text"
        className="input-custom mb-2"
        placeholder="Enter your full name"
        name="fullName"
        value={optionalData.fullName}
        onChange={handleChange}
      />
      <input
        type="text"
        className="input-custom mb-2"
        placeholder="Enter your job email address"
        name="email"
        value={optionalData.email}
        onChange={handleChange}
      />
    </div>
  );
};

export default OptionalDataSection;
