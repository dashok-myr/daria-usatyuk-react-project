import Toggle from "../components/Toggle.tsx";
import clockIcon from "../assets/clock-icon.jpeg";
import { useDocumentUploadContext } from "../DocumentUploadProvider.tsx";

export default function ToleranceWindowToggle() {
  const { formData, toggleToleranceWindow } = useDocumentUploadContext();

  return (
    <>
      <div className="bg-gray-200 h-0.5 mt-3 mb-3 w-80" />
      <p className="text-blue-950 font-semibold mb-2">Tolerance Window:</p>
      <div className="flex items-center divide-x divide-navy">
        <div className="flex pr-3">
          <Toggle
            isToggleOn={formData.toleranceWindowToggle}
            setIsToggleOn={toggleToleranceWindow}
          />
        </div>
        <div className="flex items-center pl-3 gap-2">
          <img src={clockIcon} alt="clock-icon" className="h-5 w-5" />
          <div className="text-navy text-sm">Select Tolerance Level</div>
        </div>
      </div>
    </>
  );
}
