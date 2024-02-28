import CloseButton from "./CloseButton.tsx";
import RadioGroup from "./components/RadioGroup.tsx";
import Dropdown from "./Dropdown.tsx";
import Button from "./components/Button.tsx";
import DragAndDrop from "./DragAndDrop.tsx";
import clockIcon from "../src/assets/clock-icon.jpeg";
import Toggle from "./Toggle.tsx";
import { useState } from "react";
import ClientOption from "./ClientOption.tsx";

const dropdownOptions = [
  "Lorem ipsum dolor",
  "dolore eu fugiat",
  "sint occaecat",
];

const SOCIAL_DISTANCING = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
] as const;

type ISocialDistancingValue = (typeof SOCIAL_DISTANCING)[number]["value"];

export default function App() {
  const [socialDistancing, setSocialDistancing] =
    useState<ISocialDistancingValue>("yes");

  return (
    <div className="h-auto bg-gray-50">
      <div className="flex flex-col items-center p-7">
        <div className="self-start">
          <CloseButton />
        </div>
        <div className="text-3xl text-blue-950 font-bold">Document Upload</div>
        <div className="bg-gray-200 h-0.5 mt-3 w-64 mb-10" />
        <div className="flex gap-16 w-4/5">
          <div className="flex flex-col w-3/5">
            <Dropdown
              value="Select Import Name:"
              options={dropdownOptions}
              onSelectOption={() => {}}
            />
            <div className="bg-gray-200 h-0.5 mt-5 mb-3 w-80" />
            <DragAndDrop />
            <div className="bg-gray-200 h-0.5 mt-3 mb-3 w-80" />
            <div className="flex flex-col">
              <p className="text-navy font-semibold">Location Checking:</p>
              <p className="text-lime">No Elapsed Dates!</p>
            </div>
            <div className="bg-gray-200 h-0.5 mt-3 mb-3 w-80" />
            <p className="text-blue-950 font-semibold mb-2">
              Tolerance Window:
            </p>
            <div className="flex items-center divide-x divide-navy">
              <div className="flex pr-3">
                <Toggle />
              </div>
              <div className="flex items-center pl-3 gap-2">
                <img src={clockIcon} alt="clock-icon" className="h-5 w-5" />
                <div className="text-navy text-sm">Select Tolerance Level</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-2/5">
            <RadioGroup
              title="Split schedule using social distancing?"
              value={socialDistancing}
              options={SOCIAL_DISTANCING}
              onChange={(value) => {
                setSocialDistancing(value);
              }}
            />
            <div className="bg-gray-200 h-0.5 my-2 w-80" />
            <div className="flex flex-col">
              <p className="text-blue-950 font-semibold">
                Elapse Data Checking:
              </p>
              <p className="text-lime">All Available!</p>
            </div>
            <div className="bg-gray-200 h-0.5 my-2 w-80" />
            <ClientOption />
          </div>
        </div>

        <div className="flex flex-col gap-5 mt-10">
          <p className="font-semibold text-blue-950 text-lg">
            Data in the import file is correct. Please press Continue to import.
          </p>
          <div className="flex flex-row gap-5 w-full">
            <Button onClick={() => {}} fullWidth>
              Continue Import
            </Button>
            <Button onClick={() => {}} intent="secondary" fullWidth>
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
