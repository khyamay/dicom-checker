import { FileStatus } from "../../utils/fileProcessing";
import { ResultItem, ResultsList } from "./styles";

interface ResultsDisplayProps {
  fileStatuses: FileStatus[];
}

const ResultsDisplay = ({
  fileStatuses
}: ResultsDisplayProps): JSX.Element | null => {
  if (fileStatuses.length === 0) return null;

  return (
    <div>
      <h3>Results:</h3>
      <ResultsList>
        {fileStatuses.map((file, index) => (
          <ResultItem key={index}>
            {file.name} is{" "}
            {file.isDicom ? "a valid DICOM file" : "not a DICOM file"}
          </ResultItem>
        ))}
      </ResultsList>
    </div>
  );
};

export default ResultsDisplay;
