import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

import {
  FileStatus,
  processDicomFile,
  processZipFile
} from "@/utils/fileProcessing";
import { Spinner } from "../Spinner";
import ResultsDisplay from "./ResultsDisplay";
import { DropzoneContainer, ResultsContainer } from "./styles";

const DragAndDrop = (): JSX.Element => {
  const [fileStatuses, setFileStatuses] = useState<FileStatus[]>([]);
  const [loading, setLoading] = useState(false);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    setLoading(true);
    const newFileStatuses: FileStatus[] = [];

    for (const file of acceptedFiles) {
      if (file.name.endsWith(".zip")) {
        const zipResults = await processZipFile(file);
        newFileStatuses.push(...zipResults);
      } else {
        const arrayBuffer = await file.arrayBuffer();
        const result = await processDicomFile(arrayBuffer, file.name);
        newFileStatuses.push(result);
      }
    }

    setFileStatuses(newFileStatuses);
    setLoading(false);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <DropzoneContainer
        {...getRootProps()}
        style={{
          backgroundColor: isDragActive
            ? "rgba(255, 255, 255, 0.6)"
            : "rgba(255, 255, 255, 0.1)"
        }}
      >
        <input {...getInputProps()} />
        <p>
          Drag & drop some files or a zip folder here, or click to select files
        </p>
      </DropzoneContainer>
      {loading && <Spinner />}
      <ResultsContainer>
        <ResultsDisplay fileStatuses={fileStatuses} />
      </ResultsContainer>
    </div>
  );
};

export default DragAndDrop;
