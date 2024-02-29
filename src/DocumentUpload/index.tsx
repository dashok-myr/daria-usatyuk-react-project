import CloseButton from "./CloseButton.tsx";
import Button from "../components/Button.tsx";
import DragAndDrop from "./DragAndDrop.tsx";
import ClientForm from "./ClientForm.tsx";
import SelectImportNameDropdown from "./SelectImportNameDropdown.tsx";
import ElapsedDatesStatus from "./ElapsedDatesStatus.tsx";
import ToleranceWindowToggle from "./ToleranceWindowToggle.tsx";
import SplitScheduleRadioGroup from "./SplitScheduleRadioGroup.tsx";
import ElapsedDataCheckingStatus from "./ElapsedDataCheckingStatus.tsx";
import DocumentUploadTitle from "./DocumentUploadTitle.tsx";

export default function DocumentUpload() {
  return (
    <div className="h-auto bg-gray-50">
      <div className="flex flex-col items-center p-7">
        <div className="self-start">
          <CloseButton />
        </div>
        <DocumentUploadTitle />

        <div className="lg:flex gap-16 w-full lg:w-4/5">
          <div className="flex flex-col w-full lg:w-3/5">
            <SelectImportNameDropdown />
            <div className="bg-gray-200 h-0.5 mt-5 mb-3 w-80" />
            <DragAndDrop />
            <div className="flex flex-col">
              <ElapsedDatesStatus />
              <ToleranceWindowToggle />
            </div>
          </div>

          <div className="flex flex-col w-2/5">
            <div>
              <SplitScheduleRadioGroup />
              <div className="bg-gray-200 h-0.5 my-2 w-80" />
              <ElapsedDataCheckingStatus />
              <div className="bg-gray-200 h-0.5 my-2 w-80" />
            </div>
            <ClientForm />
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
