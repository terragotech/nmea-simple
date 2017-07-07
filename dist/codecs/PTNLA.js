"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sentenceId = "PTNLA";
exports.sentenceName = "LASER Range Trimble";
function decodeSentence(fields) {
    return {
        sentenceId: exports.sentenceId,
        sentenceName: exports.sentenceName,
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
}
exports.decodeSentence = decodeSentence;
;
