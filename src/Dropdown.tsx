import arrowDown from "../src/assets/icon-arrow-down.svg";
import { useState } from "react";

interface IDropdownProps {
  value: string;
  options: string[];
  onSelectOption: (option: string) => void;
}

export default function Dropdown({
  value,
  options,
  onSelectOption,
}: IDropdownProps) {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <div className="relative text-left">
        <button
          onClick={() => setIsOpenDropdown(!isOpenDropdown)}
          className="flex w-full justify-between items-center text-sm font-semibold text-blue-950 relative px-4 py-2 gap-x-2 rounded-lg hover:ring-1 ring-1 ring-gray-300 hover:ring-offset-gray-500 hover:shadow-md hover:bg-gray-50"
        >
          {value}
          <img src={arrowDown} alt="arrow-down" className="h-2" />
        </button>
        {isOpenDropdown && (
          <div className="divide-y absolute right-0 z-10 mt-2 w-full bg-white origin-top-right rounded-md shadow-lg ring-1 ring-gray-400 ring-opacity-5 focus:outline-none">
            {options.map((option) => {
              return (
                <div className="p-0.5">
                  <button
                    onClick={() => {
                      onSelectOption(option);
                      setIsOpenDropdown(false);
                    }}
                    className="font-semibold text-gray-700 px-4 py-2 text-sm"
                  >
                    {option}
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
