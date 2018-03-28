import {turnsPlayed} from "../lib";

describe("lib test", () => {

    it("Should detect turns played", () => {
        expect(turnsPlayed({
            1: false,
            2: 4,
            3: 6,
            4: 16
        })).toEqual(3);
    });

    it("Should detect turns played", () => {
        expect(turnsPlayed({
            1: false,
            2: false,
            3: false,
            4: false
        })).toEqual(0);
    });


});