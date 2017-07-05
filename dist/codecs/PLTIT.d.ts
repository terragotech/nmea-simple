export declare const sentenceId: "PLTIT";
export declare const sentenceName = "LASER Range Laser Tech";
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
export declare function decodeSentence(fields: string[]): PLTITPacket;
