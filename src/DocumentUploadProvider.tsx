import { createContext, PropsWithChildren, useContext, useState } from "react";

export const DROPDOWN_OPTIONS = [
  "Lorem ipsum dolor",
  "dolore eu fugiat",
  "sint occaecat",
];

export const CLIENT_OPTIONS = [
  { name: "Testing Center 1", options: DROPDOWN_OPTIONS },
  { name: "Testing Center 2", options: DROPDOWN_OPTIONS },
  { name: "Testing Center 3", options: DROPDOWN_OPTIONS },
  { name: "Testing Center 4", options: DROPDOWN_OPTIONS },
] as const;

export const CLIENT_RADIO_OPTIONS = [
  { value: "single", label: "Single" },
  { value: "multiple", label: "Multiple" },
] as const;

export type IClientOptionValue = (typeof CLIENT_RADIO_OPTIONS)[number]["value"];
export type IClientOptionName = (typeof CLIENT_OPTIONS)[number]["name"];

export const SOCIAL_DISTANCING = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
] as const;

export type ISocialDistancingValue =
  (typeof SOCIAL_DISTANCING)[number]["value"];

type IClientMultipleOptions = [
  { name: "Testing Center 1"; option: string },
  { name: "Testing Center 2"; option: string },
  { name: "Testing Center 3"; option: string },
  { name: "Testing Center 4"; option: string }
];

interface IFormData {
  importName: string;
  files: { name: string; size: number }[];
  toleranceWindowToggle: boolean;
  splitScheduleRadioValue: ISocialDistancingValue;
  clientRadioValue: IClientOptionValue;
  clientSingleOption: string;
  clientMultipleOptions: IClientMultipleOptions;
}

export interface IDocumentUploadContext {
  formData: IFormData;
  updateImportNameValue: (value: string) => void;
  updateFiles: (files: FileList) => void;
  toggleToleranceWindow: () => void;
  setSplitScheduleRadioValue: (value: ISocialDistancingValue) => void;
  setClientRadioValue: (value: IClientOptionValue) => void;
  setClientSingleOption: (value: string) => void;
  setClientMultipleOptions: (name: IClientOptionName, value: string) => void;
}

export const DocumentUploadContext =
  createContext<IDocumentUploadContext | null>(null);

const INITIAL_FORM_DATA: IFormData = {
  importName: "",
  files: [],
  toleranceWindowToggle: true,
  splitScheduleRadioValue: "yes",
  clientRadioValue: "multiple",
  clientSingleOption: "",
  clientMultipleOptions: [
    { name: "Testing Center 1", option: "" },
    { name: "Testing Center 2", option: "" },
    { name: "Testing Center 3", option: "" },
    { name: "Testing Center 4", option: "" },
  ],
};

export default function DocumentUploadProvider({
  children,
}: PropsWithChildren<object>) {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const updateImportNameValue = (value: string) => {
    setFormData({ ...formData, importName: value });
  };

  const updateFiles = (files: FileList) => {
    setFormData({
      ...formData,
      files: Array.from(files).map(({ name, size }) => {
        return { name, size };
      }),
    });
  };

  const toggleToleranceWindow = () => {
    setFormData({
      ...formData,
      toleranceWindowToggle: !formData.toleranceWindowToggle,
    });
  };

  const setSplitScheduleRadioValue = (value: ISocialDistancingValue) => {
    setFormData({ ...formData, splitScheduleRadioValue: value });
  };

  const setClientRadioValue = (value: IClientOptionValue) => {
    setFormData({ ...formData, clientRadioValue: value });
  };

  const setClientSingleOption = (value: string) => {
    setFormData({ ...formData, clientSingleOption: value });
  };

  const setClientMultipleOptions = (name: IClientOptionName, value: string) => {
    const index = formData.clientMultipleOptions.findIndex((option) => {
      return option.name === name;
    });

    const clientMultipleOptionsCopy: IClientMultipleOptions = [
      ...formData.clientMultipleOptions,
    ];
    clientMultipleOptionsCopy[index].option = value;

    setFormData({
      ...formData,
      clientMultipleOptions: clientMultipleOptionsCopy,
    });
  };

  return (
    <DocumentUploadContext.Provider
      value={{
        formData,
        updateImportNameValue,
        updateFiles,
        toggleToleranceWindow,
        setClientMultipleOptions,
        setSplitScheduleRadioValue,

        setClientRadioValue,
        setClientSingleOption,
      }}
    >
      {children}
    </DocumentUploadContext.Provider>
  );
}

export function useDocumentUploadContext() {
  const context = useContext(DocumentUploadContext);

  if (!context) {
    throw new Error(
      "useDocumentUploadContext must be used within a DocumentUploadProvider"
    );
  }

  return context;
}
