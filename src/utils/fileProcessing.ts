import dicomParser from "dicom-parser";
import JSZip from "jszip";

export interface FileStatus {
  name: string;
  isDicom: boolean;
}

export const processDicomFile = async (
  arrayBuffer: ArrayBuffer,
  fileName: string
): Promise<FileStatus> => {
  try {
    const byteArray = new Uint8Array(arrayBuffer);
    dicomParser.parseDicom(byteArray);
    return { name: fileName, isDicom: true };
  } catch (error) {
    return { name: fileName, isDicom: false };
  }
};

export const processZipFile = async (file: File): Promise<FileStatus[]> => {
  const zip = new JSZip();
  const contents = await zip.loadAsync(file);
  const filePromises: Promise<FileStatus>[] = [];

  contents.forEach((relativePath, zipEntry) => {
    if (!zipEntry.dir) {
      const promise = zipEntry
        .async("arraybuffer")
        .then((content) => processDicomFile(content, zipEntry.name));
      filePromises.push(promise);
    }
  });

  return Promise.all(filePromises);
};
