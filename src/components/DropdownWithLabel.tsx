import Dropdown from "./Dropdown.tsx";
import clockIcon from "../assets/clock-icon.jpeg";

export default function DropdownWithLabel({
  label,
  options,
  value,
  onSelectOption,
}: {
  label: string;
  options: string[];
  value: string;
  onSelectOption: (selectedOption: string) => void;
}) {
  return (
    <div className="flex items-center gap-3">
      <p className="text-navy text-sm pr-10">{label}</p>
      <Dropdown
        value={value}
        options={options}
        onSelectOption={onSelectOption}
      />
      <img src={clockIcon} alt="clock-icon" className="h-6 w-6" />
    </div>
  );
}
