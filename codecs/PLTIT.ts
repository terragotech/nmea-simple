
export const sentenceId: "PLTIT" = "PLTIT";
export const sentenceName = "LASER Range Laser Tech";

export interface PLTITPacket {
    sentenceId: "PLTIT";
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

export function decodeSentence(fields: string[]): PLTITPacket {
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
