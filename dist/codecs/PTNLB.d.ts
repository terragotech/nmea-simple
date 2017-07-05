export declare const sentenceId: "PTNLB";
export declare const sentenceName = "LASER Range Trimble";
export interface PTNLBPacket {
    sentenceId: "PTNLB";
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
export declare function decodeSentence(fields: string[]): PTNLBPacket;
