const AddButton = () => {
  return (
    <button className="btn border-gray-300 btn-square min-h-8 size-8 btn-outline col-start-6 row-start-2">
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
    </button>
  );
};

export default AddButton;
