
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
  let resultRms = Math.sqrt(((Math.pow(Number(fields[6]), 2) + Math.pow(Number(fields[7]), 2))));
  return {
    sentenceId: sentenceId,
    sentenceName: sentenceName,
    timestamp: fields[1],
    rms: resultRms + "",
    semiMajorError: fields[3],
    semiMinorError: fields[4],
    orientation: fields[5],
    horizontalaccuracy: parseInt(fields[2], 10) === 0 ? "0" : fields[6],
    lonError: fields[7],
    verticalaccuracy: fields[8]
  };
};
