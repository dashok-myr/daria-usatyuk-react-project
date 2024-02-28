import RadioGroup from "./components/RadioGroup.tsx";
import { useState } from "react";
import Dropdown from "./Dropdown.tsx";
import clockIcon from "./assets/clock-icon.jpeg";

const DROPDOWN_OPTIONS = [
  "Lorem ipsum dolor",
  "dolore eu fugiat",
  "sint occaecat",
];

const CLIENT_RADIO_OPTIONS = [
  { value: "single", label: "Single" },
  { value: "multiple", label: "Multiple" },
] as const;

type IClientOptionValue = (typeof CLIENT_OPTIONS)[number]["value"];

const CLIENT_OPTIONS = [
  { name: "Testing Center 1", options: DROPDOWN_OPTIONS },
  { name: "Testing Center 2", options: DROPDOWN_OPTIONS },
  { name: "Testing Center 3", options: DROPDOWN_OPTIONS },
  { name: "Testing Center 4", options: DROPDOWN_OPTIONS },
];

export default function ClientOptions() {
  const [clientRadioValue, setClientRadioValue] =
    useState<IClientOptionValue>("multiple");

  return (
    <>
      <RadioGroup<IClientOptionValue>
        title="Client:"
        value={clientRadioValue}
        options={CLIENT_RADIO_OPTIONS}
        onChange={(value) => {
          setClientRadioValue(value);
        }}
      />
      {clientRadioValue === "multiple" ? (
        <div className="flex flex-col gap-3">
          {CLIENT_OPTIONS.map((clientOption) => {
            return (
              <div className="flex items-center gap-3">
                <p className="text-navy text-sm pr-10">{clientOption.name}</p>
                <Dropdown
                  value="Select Value"
                  options={clientOption.options}
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
            options={DROPDOWN_OPTIONS}
            onSelectOption={() => {}}
          />
          <img src={clockIcon} alt="clock-icon" className="h-6 w-6" />
        </div>
      )}
    </>
  );
}
