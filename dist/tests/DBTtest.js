"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("should");
var index_1 = require("../index");
describe("DBT", function () {
    it("parser", function () {
        var packet = index_1.parseNmeaSentence("$IIDBT,036.41,f,011.10,M,005.99,F*25");
        packet.should.have.property("sentenceId", "DBT");
        packet.should.have.property("sentenceName", "Depth below transducer");
        packet.should.have.property("depthFeet", 36.41);
        packet.should.have.property("depthMeters", 11.10);
        packet.should.have.property("depthFathoms", 5.99);
    });
    it("encoder", function () {
        var sentence = index_1.encodeNmeaPacket({
            sentenceId: "DBT",
            depthFeet: 36.41,
            depthFathoms: 5.99,
            depthMeters: 11.10
        }, "II");
        sentence.should.equal("$IIDBT,36.41,f,11.10,M,5.99,F*25");
    });
});
