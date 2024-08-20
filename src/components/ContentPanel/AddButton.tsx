import { useState, useEffect } from "react";

interface Props {
  className: string;
  onClick: () => void;
}

const AddButton = ({ className, onClick }: Props) => {
  const [isXL, setIsXL] = useState(window.innerWidth >= 1280);

  useEffect(() => {
    const handleResize = () => {
      setIsXL(window.innerWidth >= 1280);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <button
      className={className}
      onClick={(event) => {
        event.preventDefault(); // Prevents the form from submitting and refreshing the page
        onClick();
      }}
    >
      {isXL ? (
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
      ) : (
        "Add"
      )}
    </button>
  );
};

export default AddButton;
