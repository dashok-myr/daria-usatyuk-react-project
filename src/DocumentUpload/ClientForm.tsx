import RadioGroup from "../components/RadioGroup.tsx";
import DropdownWithLabel from "../components/DropdownWithLabel.tsx";
import {
  CLIENT_OPTIONS,
  CLIENT_RADIO_OPTIONS,
  IClientOptionValue,
  useDocumentUploadContext,
} from "../DocumentUploadProvider.tsx";

const DROPDOWN_PLACEHOLDER = "Select Client";

function ClientSingleForm({ option }: { option: (typeof CLIENT_OPTIONS)[0] }) {
  const { formData, setClientSingleOption } = useDocumentUploadContext();

  return (
    <DropdownWithLabel
      value={formData.clientSingleOption || DROPDOWN_PLACEHOLDER}
      label={option.name}
      options={option.options}
      onSelectOption={(selectedOption) => {
        setClientSingleOption(selectedOption);
      }}
    />
  );
}

function ClientMultipleForm({ options }: { options: typeof CLIENT_OPTIONS }) {
  const { formData, setClientMultipleOptions } = useDocumentUploadContext();

  return (
    <div className="flex flex-col gap-3">
      {options.map((option, index) => {
        return (
          <DropdownWithLabel
            value={
              formData.clientMultipleOptions[index].option ||
              DROPDOWN_PLACEHOLDER
            }
            label={option.name}
            options={option.options}
            onSelectOption={(selectedOption) => {
              setClientMultipleOptions(option.name, selectedOption);
            }}
          />
        );
      })}
    </div>
  );
}

export default function ClientForm() {
  const { formData, setClientRadioValue } = useDocumentUploadContext();

  return (
    <>
      <RadioGroup<IClientOptionValue>
        title="Client:"
        value={formData.clientRadioValue}
        options={CLIENT_RADIO_OPTIONS}
        onChange={(value) => {
          setClientRadioValue(value);
        }}
      />
      {formData.clientRadioValue === "multiple" && (
        <ClientMultipleForm options={CLIENT_OPTIONS} />
      )}
      {formData.clientRadioValue === "single" && (
        <ClientSingleForm option={CLIENT_OPTIONS[0]} />
      )}
    </>
  );
}
