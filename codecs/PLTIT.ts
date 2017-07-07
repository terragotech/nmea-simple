
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
    horizontalVector: fields[1],
    horizontalDistance: fields[2],
    horizontalDistanceUnits: fields[3][0],
    horizontalAngle: fields[4],
    horizontalAngleUnits: fields[5][0],
    verticalAngle: fields[6],
    verticalAngleUnits: fields[7][0],
    slopeDistance: fields[8],
    slopeDistanceUnits: fields[9][0]
  };
};
