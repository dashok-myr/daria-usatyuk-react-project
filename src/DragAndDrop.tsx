import React, { useRef, useState } from "react";
import fileIcon from "./assets/file-icon-1.jpeg";
import filesIcon from "./assets/file-icon-2.jpeg";
import Button from "./components/Button.tsx";

function convertBytes(num: number): string {
  const units: string[] = ["bytes", "KB", "MB", "GB"];
  let index = 0;

  while (num >= 1024 && index < units.length - 1) {
    num /= 1024;
    index++;
  }

  return `${num.toFixed(1)} ${units[index]}`;
}

export default function DragAndDrop() {
  const [files, setFiles] = useState<FileList | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setFiles(event.dataTransfer.files);
  };

  const filesArray = Array.from(files || []);

  return (
    <div className="flex flex-col gap-4">
      <p className="font-semibold text-blue-950">
        Select a manifest that you'd like to import
      </p>
      <div className="flex w-full">
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          className="border border-gray-300 p-5 rounded-lg w-full focus:cursor-pointer"
        >
          <div className="border border-dashed border-gray-300 p-9 rounded-lg">
            <div className="flex flex-col gap-3 justify-center items-center">
              <img src={fileIcon} alt="document-icon" className="w-5 h-5" />
              <div className="text-navy">
                Drag & Drop Here Or {""}
                <span className="font-semibold cursor-pointer">Browse</span>
              </div>
              <input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setFiles(e.target.files);
                }}
                hidden
                ref={inputRef}
                type="file"
                className="hidden"
              />
            </div>
          </div>
          <div className="mt-3" />
          <div className="flex justify-center">
            <Button onClick={() => inputRef.current?.click()} size="medium">
              Upload Manifest
            </Button>
          </div>
        </div>
      </div>
      <div>
        {files && (
          <>
            <div className="bg-gray-200 h-0.5 mt-3 mb-3 w-full" />
            {filesArray?.map((file) => {
              return (
                <div
                  className="flex gap-2 items-center px-3 pb-4"
                  key={file.name}
                >
                  <img src={filesIcon} alt="file-icon" className="size-7" />
                  <div className="flex flex-col w-full">
                    <div className="flex justify-between items-center">
                      <p className="text-gray-400">{file.name}</p>
                      <div className="text-gray-500 text-xs font-semibold">
                        {convertBytes(file.size)}
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 h-1">
                      <div
                        className="bg-yellow h-1"
                        style={{ width: "10%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="bg-gray-200 h-0.5 mt-3 mb-3 w-full" />
          </>
        )}
      </div>
    </div>
  );
}
