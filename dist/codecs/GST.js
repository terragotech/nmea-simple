"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sentenceId = "GST";
exports.sentenceName = "Position Accuracy";
function decodeSentence(fields) {
    return {
        sentenceId: exports.sentenceId,
        sentenceName: exports.sentenceName,
        timestamp: fields[1],
        rms: fields[2],
        semiMajorError: fields[3],
        semiMinorError: fields[4],
        orientation: fields[5],
        horizontalaccuracy: parseInt(fields[2], 10) === 0 ? "0" : fields[6],
        lonError: fields[7],
        verticalaccuracy: fields[8]
    };
}
exports.decodeSentence = decodeSentence;
;
