import { FaUndo } from "react-icons/fa";

interface Props {
  className?: string;
  onClick: () => void; // Add onClick prop
  visible: boolean; // Control visibility based on whether there's a last deleted item
}

const RestoreLastChange = ({ onClick, visible }: Props) => {
  if (!visible) return null; // Hide the button if there’s nothing to restore

  return (
    <div className="flex justify-center">
      <button
        className="btn min-h-8 h-8 w-8 border-gray-300 btn-square btn-outline font-roboto transition-all duration-300 ease-in-out flex items-center justify-center"
        onClick={onClick} // Handle click event
      >
        <FaUndo className="h-6" />
      </button>
    </div>
  );
};

export default RestoreLastChange;
