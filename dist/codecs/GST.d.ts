export declare const sentenceId: "GST";
export declare const sentenceName = "Position Accuracy";
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
}
export declare function decodeSentence(fields: string[]): GSTPacket;
