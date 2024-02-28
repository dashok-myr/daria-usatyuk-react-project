import RadioGroup from "./components/RadioGroup.tsx";
import { useState } from "react";
import Dropdown from "./Dropdown.tsx";
import clockIcon from "./assets/clock-icon.jpeg";

const dropdownOptions = [
  "Lorem ipsum dolor",
  "dolore eu fugiat",
  "sint occaecat",
];

const CLIENT_OPTIONS = [
  { value: "single", label: "Single" },
  { value: "multiple", label: "Multiple" },
] as const;

type IClientOptionValue = (typeof CLIENT_OPTIONS)[number]["value"];

const testingCenters = [
  "Testing Center 1",
  "Testing Center 2",
  "Testing Center 3",
  "Testing Center 4",
];

export default function ClientOption() {
  const [clientRadioValue, setClientRadioValue] =
    useState<IClientOptionValue>("multiple");

  return (
    <>
      <RadioGroup<IClientOptionValue>
        title="Client:"
        value={clientRadioValue}
        options={CLIENT_OPTIONS}
        onChange={(value) => {
          setClientRadioValue(value);
        }}
      />
      {clientRadioValue === "multiple" ? (
        <div className="flex flex-col gap-3">
          {testingCenters.map((testingCenter) => {
            return (
              <div className="flex items-center gap-3">
                <p className="text-navy text-sm pr-10">{testingCenter}</p>
                <Dropdown
                  value="Select Value"
                  options={dropdownOptions}
                  onSelectOption={() => {}}
                />
                <img src={clockIcon} alt="clock-icon" className="h-6 w-6" />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <p className="text-navy text-sm pr-10">Testing Center 1</p>
          <Dropdown
            value="Select Value"
            options={dropdownOptions}
            onSelectOption={() => {}}
          />
          <img src={clockIcon} alt="clock-icon" className="h-6 w-6" />
        </div>
      )}
    </>
  );
}
