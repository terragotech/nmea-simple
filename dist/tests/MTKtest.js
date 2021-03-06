"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("should");
var index_1 = require("../index");
describe("MTK", function () {
    it("parser", function () {
        var packet = index_1.parseNmeaSentence("$PMTK314,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0*28");
        packet.should.have.property("sentenceId", "MTK");
        packet.should.have.property("sentenceName", "Configuration packet");
        packet.should.have.property("packetType", 314);
        packet.should.have.property("data", [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    });
    describe("encoder", function () {
        it("works with numeric data", function () {
            var sentence = index_1.encodeNmeaPacket({
                sentenceId: "MTK",
                packetType: 300,
                data: [1000, 0, 0, 0, 0]
            }, "P");
            sentence.should.equal("$PMTK300,1000,0,0,0,0*1C");
        });
        it("works with string data", function () {
            var sentence = index_1.encodeNmeaPacket({
                sentenceId: "MTK",
                packetType: 300,
                data: ["1000", "0", "0", "0", "0"]
            });
            sentence.should.equal("$PMTK300,1000,0,0,0,0*1C");
        });
    });
});
