import { useState } from "react";
import { FaTrashRestoreAlt } from "react-icons/fa";

interface Props {
  className?: string;
}

const RestoreLastChange = ({ className }: Props) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative inline-block overflow-hidden ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <button
        className={`btn border-gray-300 btn-square min-h-8 h-8 btn-outline font-roboto transition-all duration-300 ease-in-out flex items-center justify-center ${
          hovered ? "w-40" : "w-8 "
        }`}
        style={{
          transformOrigin: "right center",
          backgroundColor: hovered ? "#212121" : "transparent",
        }}
      >
        <div className="flex items-center justify-center w-8 h-full">
          <FaTrashRestoreAlt className="h-full w-6/12" />
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out flex items-center ${
            hovered ? "w-28" : "w-0"
          }`}
        >
          <span className="whitespace-nowrap text-white">Undo changes</span>
        </div>
      </button>
    </div>
  );
};

export default RestoreLastChange;
