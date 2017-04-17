
export const sentenceId: "GST" = "GST";
export const sentenceName = "Position Accuracy";

export interface GSTPacket {
    sentenceId: "GST";
    sentenceName?: string;
    timestamp?: string;
    rms: string;
    semiMajorError: string;
    semiMinorError: string;
    orientation: string;
    horizontalaccuracy: string;
    lonError: string;
    verticalaccuracy: string;
    talkerId?: string;
}

export function decodeSentence(fields: string[]): GSTPacket {
  return {
    sentenceId: sentenceId,
    sentenceName: sentenceName,
    timestamp: fields[1],
    rms: fields[2],
    semiMajorError: fields[3],
    semiMinorError: fields[4],
    orientation: fields[5],
    horizontalaccuracy: parseInt(fields[2], 10) === 0 ? "0" : fields[6],
    lonError: fields[7],
    verticalaccuracy: fields[8]
  };
};
