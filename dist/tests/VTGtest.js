"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("should");
var index_1 = require("../index");
describe("VTG", function () {
    it("parser", function () {
        var packet = index_1.parseNmeaSentence("$IIVTG,210.43,T,210.43,M,5.65,N,,,A*67");
        packet.should.have.property("sentenceId", "VTG");
        packet.should.have.property("sentenceName", "Track made good and ground speed");
        packet.should.have.property("trackTrue", 210.43);
        packet.should.have.property("trackMagnetic", 210.43);
        packet.should.have.property("speedKnots", 5.65);
        packet.should.have.property("speedKmph", 0);
        packet.should.have.property("faaMode", "A");
    });
    it("encodes (with KM/H)", function () {
        var sentence = index_1.encodeNmeaPacket({
            sentenceId: "VTG",
            trackTrue: 210.43,
            trackMagnetic: 209.43,
            speedKnots: 2.91,
            speedKmph: 5.38,
            faaMode: "A"
        }, "XX");
        sentence.should.equal("$XXVTG,210.43,T,209.43,M,2.91,N,5.38,K,A*38");
    });
    it("encodes (without KM/H)", function () {
        var sentence = index_1.encodeNmeaPacket({
            sentenceId: "VTG",
            trackTrue: 210.43,
            trackMagnetic: 209.43,
            speedKnots: 2.91,
            faaMode: "A"
        }, "XX");
        sentence.should.equal("$XXVTG,210.43,T,209.43,M,2.91,N,,,A*63");
    });
});
