"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("should");
var index_1 = require("../index");
describe("RDID", function () {
    it("parser", function () {
        var packet = index_1.parseNmeaSentence("$PRDID,-1.31,7.81,47.31*68");
        packet.should.have.property("sentenceId", "RDID");
        packet.should.have.property("sentenceName", "RDI proprietary heading, pitch, and roll");
        packet.should.have.property("roll", -1.31);
        packet.should.have.property("pitch", 7.81);
        packet.should.have.property("heading", 47.31);
    });
});
