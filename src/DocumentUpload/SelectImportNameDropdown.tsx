import Dropdown from "../components/Dropdown.tsx";
import {
  DROPDOWN_OPTIONS,
  useDocumentUploadContext,
} from "../DocumentUploadProvider.tsx";

export default function SelectImportNameDropdown() {
  const { formData, updateImportNameValue } = useDocumentUploadContext();

  return (
    <Dropdown
      value={
        formData.importName === "" ? "Select Import Name:" : formData.importName
      }
      options={DROPDOWN_OPTIONS}
      onSelectOption={(option) => {
        updateImportNameValue(option);
      }}
    />
  );
}
