import { useState } from "react";
import { IoOptionsOutline } from "react-icons/io5";

interface Props {
    className?: string;
}

const OptionButton = ({className} : Props) => {
    const [hovered, setHovered] = useState(false);

    return (
      <div
        className={`relative inline-block overflow-hidden ${className}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <button
          className={`btn border-gray-300 btn-square min-h-8 h-8 btn-outline font-roboto transition-all duration-300 ease-in-out flex items-center justify-center ${
            hovered ? "w-8 md:w-32" : "w-8"
          }`}
          style={{
            transformOrigin: "right center",
            backgroundColor: hovered ? "#00049E" : "transparent",
          }}
        >
          <div className="flex items-center justify-center w-8 h-full">
            <IoOptionsOutline className="h-6 w-6" />
          </div>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out flex items-center ${
              hovered ? "w-0 md:w-20" : "w-0"
            }`}
          >
            <span className="whitespace-nowrap text-white">Optionsssssssssssssssssss</span>
          </div>
        </button>
      </div>
    )
}

export default OptionButton