import Dropdown from "../components/Dropdown.tsx";
import {
  DROPDOWN_OPTIONS,
  useDocumentUploadContext,
} from "../DocumentUploadProvider.tsx";

const IMPORT_NAME_PLACEHOLDER = "Select Import Name:";

export default function SelectImportNameDropdown() {
  const { formData, updateImportNameValue } = useDocumentUploadContext();

  return (
    <Dropdown
      value={formData.importName || IMPORT_NAME_PLACEHOLDER}
      options={DROPDOWN_OPTIONS}
      onSelectOption={(option) => {
        updateImportNameValue(option);
      }}
    />
  );
}
