import RadioGroup from "../components/RadioGroup.tsx";
import {
  SOCIAL_DISTANCING,
  useDocumentUploadContext,
} from "../DocumentUploadProvider.tsx";

export default function SplitScheduleRadioGroup() {
  const { formData, setSplitScheduleRadioValue } = useDocumentUploadContext();

  return (
    <RadioGroup
      title="Split schedule using social distancing?"
      value={formData.splitScheduleRadioValue}
      options={SOCIAL_DISTANCING}
      onChange={(value) => {
        setSplitScheduleRadioValue(value);
      }}
    />
  );
}
