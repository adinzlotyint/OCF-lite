import React, { useState, useRef } from "react";
import { LuSearch } from "react-icons/lu";
import { LuSearchX } from "react-icons/lu";

interface Props {
  className?: string;
  onInputChange: (value: string) => void;
}

const SearchButton: React.FC<Props> = ({ className, onInputChange }) => {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [searchText, setSearchText] = useState(false);

  const handleClick = () => {
    if (searchText) {
      if (inputRef.current) {
        inputRef.current.value = "";
        setSearchText(false);
        onInputChange("");
      }
    } else {
      setIsInputVisible(true);
      setShowButton(false);
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 300);
    }
  };

  const handleBlur = () => {
    setIsInputVisible(false);
    setTimeout(() => {
      setShowButton(true);
    }, 300);
  };

  const onChange =
    (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      onInputChange(event.target.value);
      if (event.target.value === "") {
        setSearchText(false);
      } else {
        setSearchText(true);
      }
    };

  return (
    <div className={`flex items-center relative ${className}`}>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isInputVisible ? "w-full" : "w-0"
        } overflow-hidden`}
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Type here"
          onBlur={handleBlur}
          onChange={onChange(HTMLInputElement.name)}
          className={`search-custom ${
            isInputVisible ? "opacity-100" : "opacity-0"
          } transition-opacity duration-300 ease-in-out`}
        />
      </div>
      {showButton && (
        <button
          className={`btn border-gray-300 btn-square min-h-8 size-8 btn-outline font-roboto hover:bg-primary transition-opacity duration-300 ease-in-out ${
            isInputVisible ? "opacity-0" : "opacity-100 delay-1000"
          }`}
          onClick={handleClick}
        >
          {searchText ? (
            <LuSearchX className="h-full w-8/12" />
          ) : (
            <LuSearch className="h-full w-8/12" />
          )}
        </button>
      )}
    </div>
  );
};

export default SearchButton;
