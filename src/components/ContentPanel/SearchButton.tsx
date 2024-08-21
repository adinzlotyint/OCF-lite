import React, { useState, useRef, useEffect } from "react";
import { LuSearch } from "react-icons/lu";
import { LuSearchX } from "react-icons/lu";

interface Props {
  className?: string;
  onInputChange: (searchedText: string) => void;
}

const SearchButton: React.FC<Props> = ({ className, onInputChange }) => {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchedText, setSearchedText] = useState<string>("");

  const handleClick = () => {
    if (!!searchedText) {
      if (inputRef.current) {
        inputRef.current.value = "";
        setSearchedText("");
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

  const onChange = () => {
    inputRef.current && setSearchedText(inputRef.current.value);
  };

  useEffect(() => {
    onInputChange(searchedText);
  }, [searchedText]);

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
          onChange={onChange}
          className={`search-custom ${
            isInputVisible ? "opacity-100" : "opacity-0"
          } transition-opacity duration-300 ease-in-out`}
        />
      </div>
      {showButton && (
        <button
          className={`btn border-gray-300 btn-square min-h-8 size-8 btn-outline font-roboto hover:bg-primary transition-all duration-300 ease-in-out ${
            isInputVisible ? "opacity-0" : "opacity-100"
          }`}
          onClick={handleClick}
        >
          {!!searchedText ? (
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
