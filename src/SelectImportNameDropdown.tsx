import { useState } from "react";
import Dropdown from "./components/Dropdown.tsx";

const IMPORT_NAMES = ["Lorem ipsum dolor", "dolore eu fugiat", "sint occaecat"];

export default function SelectImportNameDropdown() {
  const [selectedImportName, setSelectedImportName] = useState("");

  return (
    <Dropdown
      value={
        selectedImportName === "" ? "Select Import Name:" : selectedImportName
      }
      options={IMPORT_NAMES}
      onSelectOption={(option) => {
        setSelectedImportName(option);
      }}
    />
  );
}
