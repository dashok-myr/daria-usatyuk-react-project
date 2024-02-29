import DocumentUpload from "./DocumentUpload";
import DocumentUploadProvider from "./DocumentUploadProvider.tsx";

export default function App() {
  return (
    <>
      <DocumentUploadProvider>
        <DocumentUpload />
      </DocumentUploadProvider>
    </>
  );
}
