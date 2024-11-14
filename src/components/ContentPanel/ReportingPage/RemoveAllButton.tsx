import { MdPlaylistRemove } from "react-icons/md";
import { useState } from "react";

interface Props {
  className?: string;
  onClick?: () => void;
}

const RemoveAllButton = ({ className, onClick }: Props) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative inline-block overflow-hidden ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <button
        className={`btn border-gray-300 btn-square min-h-8 h-8 btn-outline font-roboto transition-all duration-300 ease-in-out flex items-center justify-center ${
          hovered ? "w-8 md:w-32" : "w-8 "
        }`}
        style={{
          transformOrigin: "right center",
          backgroundColor: hovered ? "#00049E" : "transparent",
        }}
        onClick={onClick}
      >
        <div className="flex items-center justify-center w-8 h-full">
          <MdPlaylistRemove className="h-6 w-6" />
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out flex items-center ${
            hovered ? "w-0 md:w-20" : "w-0"
          }`}
        >
          <span className="whitespace-nowrap text-white">Remove all</span>
        </div>
      </button>
    </div>
  );
};

export default RemoveAllButton;
