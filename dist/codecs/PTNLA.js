"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sentenceId = "PTNLA";
exports.sentenceName = "LASER Range Trimble";
function decodeSentence(fields) {
    return {
        sentenceId: exports.sentenceId,
        sentenceName: exports.sentenceName,
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
}
exports.decodeSentence = decodeSentence;
;
