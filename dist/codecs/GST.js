"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sentenceId = "GST";
exports.sentenceName = "Position Accuracy";
function decodeSentence(fields) {
    var resultRms = "";
    var fields2 = Number(fields[2]);
    var fields6 = Number(fields[6]);
    if (fields2 === 0 && fields6 === 0) {
        resultRms = "";
    }
    else {
        if (fields2 < fields6) {
            resultRms = fields2 === 0 ? fields[6] : fields[2];
        }
        else {
            resultRms = fields6 === 0 ? fields[2] : fields[6];
        }
    }
    return {
        sentenceId: exports.sentenceId,
        sentenceName: exports.sentenceName,
        timestamp: fields[1],
        rms: resultRms,
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
