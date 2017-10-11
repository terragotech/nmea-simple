"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sentenceId = "GST";
exports.sentenceName = "Position Accuracy";
function decodeSentence(fields) {
    var resultRms = Math.sqrt(((Math.pow(Number(fields[6]), 2) + Math.pow(Number(fields[7]), 2))));
    return {
        sentenceId: exports.sentenceId,
        sentenceName: exports.sentenceName,
        timestamp: fields[1],
        rms: resultRms + "",
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
