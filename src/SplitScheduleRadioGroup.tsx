import RadioGroup from "./components/RadioGroup.tsx";
import { useState } from "react";

const SOCIAL_DISTANCING = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
] as const;

type ISocialDistancingValue = (typeof SOCIAL_DISTANCING)[number]["value"];

export default function SplitScheduleRadioGroup() {
  const [socialDistancing, setSocialDistancing] =
    useState<ISocialDistancingValue>("yes");
  return (
    <RadioGroup
      title="Split schedule using social distancing?"
      value={socialDistancing}
      options={SOCIAL_DISTANCING}
      onChange={(value) => {
        setSocialDistancing(value);
      }}
    />
  );
}
