import RadioGroup from "./components/RadioGroup.tsx";
import { useState } from "react";
import DropdownWithLabel from "./components/DropdownWithLabel.tsx";

const DROPDOWN_OPTIONS = [
  "Lorem ipsum dolor",
  "dolore eu fugiat",
  "sint occaecat",
];

const CLIENT_OPTIONS = [
  { name: "Testing Center 1", options: DROPDOWN_OPTIONS },
  { name: "Testing Center 2", options: DROPDOWN_OPTIONS },
  { name: "Testing Center 3", options: DROPDOWN_OPTIONS },
  { name: "Testing Center 4", options: DROPDOWN_OPTIONS },
];

const CLIENT_RADIO_OPTIONS = [
  { value: "single", label: "Single" },
  { value: "multiple", label: "Multiple" },
] as const;

type IClientOptionValue = (typeof CLIENT_RADIO_OPTIONS)[number]["value"];

function ClientSingleForm({ option }: { option: (typeof CLIENT_OPTIONS)[0] }) {
  const [selectedClientName, setSelectedClientName] = useState("");

  return (
    <DropdownWithLabel
      value={selectedClientName === "" ? "Select Client" : selectedClientName}
      label={option.name}
      options={option.options}
      onSelectOption={(selectedOption) => {
        setSelectedClientName(selectedOption);
      }}
    />
  );
}

function ClientMultipleForm({ options }: { options: typeof CLIENT_OPTIONS }) {
  const initialState = Array(options.length).fill("");
  const [selectedClientNames, setSelectedClientNames] =
    useState<string[]>(initialState);

  return (
    <div className="flex flex-col gap-3">
      {options.map((option, index) => {
        return (
          <DropdownWithLabel
            value={
              selectedClientNames[index] === ""
                ? "Select client"
                : selectedClientNames[index]
            }
            label={option.name}
            options={option.options}
            onSelectOption={(selectedOption) => {
              setSelectedClientNames((prevState) => {
                const newArray = [...prevState];
                newArray[index] = selectedOption;
                return newArray;
              });
            }}
          />
        );
      })}
    </div>
  );
}

export default function ClientForm() {
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
      {clientRadioValue === "multiple" && (
        <ClientMultipleForm options={CLIENT_OPTIONS} />
      )}
      {clientRadioValue === "single" && (
        <ClientSingleForm option={CLIENT_OPTIONS[0]} />
      )}
    </>
  );
}
