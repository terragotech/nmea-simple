export declare const sentenceId: "GSV";
export declare const sentenceName = "Satellites in view";
export interface Satellite {
    prnNumber: number;
    elevationDegrees: number;
    azimuthTrue: number;
    SNRdB: number;
}
export interface GSVPacket {
    sentenceId: "GSV";
    sentenceName?: string;
    talkerId?: string;
    numberOfMessages: number;
    messageNumber: number;
    satellitesInView: number;
}
export declare function decodeSentence(fields: string[]): GSVPacket;
