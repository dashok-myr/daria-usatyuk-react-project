import fileIcon from "./assets/file-icon-1.jpeg";
import Button from "./components/Button.tsx";

export default function DropAndDrag() {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-semibold text-blue-950">
        Select a manifest that you'd like to import
      </p>
      <div className="flex w-full">
        <div className="border border-gray-300 p-5 rounded-lg w-full">
          <div className="border border-dashed border-gray-300 p-9 rounded-lg">
            <div className="flex flex-col gap-3 justify-center items-center">
              <img src={fileIcon} alt="document-icon" className="w-5 h-5" />
              <div className="text-navy">
                Drag & Drop Here Or {""}
                <span className="font-semibold cursor-pointer">Browse</span>
              </div>
            </div>
          </div>
          <div className="mt-3" />
          <div className="flex justify-center">
            <Button size="medium">Upload Manifest</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
