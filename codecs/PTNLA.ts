
export const sentenceId: "PTNLA" = "PTNLA";
export const sentenceName = "LASER Range Trimble";

export interface PTNLAPacket {
    sentenceId: "PTNLA";
    sentenceName?: string;
    horizontalVector: string;
    horizontalDistance: string;
    horizontalDistanceUnits: string;
    horizontalAngle: string;
    horizontalAngleUnits: string;
    verticalAngle: string;
    verticalAngleUnits: string;
    slopeDistance: string;
    slopeDistanceUnits: string;
    talkerId?: string;
}

export function decodeSentence(fields: string[]): PTNLAPacket {
  return {
    sentenceId: sentenceId,
    sentenceName: sentenceName,
    horizontalVector: fields[0],
    horizontalDistance: fields[1],
    horizontalDistanceUnits: fields[2][0],
    horizontalAngle: fields[3],
    horizontalAngleUnits: fields[4][0],
    verticalAngle: fields[5],
    verticalAngleUnits: fields[6][0],
    slopeDistance: fields[7],
    slopeDistanceUnits: fields[8][0]
  };
};
