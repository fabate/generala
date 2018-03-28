import {turnsPlayed} from "../lib";

describe("turnsPlayed()", () => {

    it("Should detect turns played I ", () => {
        expect(turnsPlayed({
            1: false,
            2: 4,
            3: 6,
            4: 16
        })).toEqual(3);
    });

    it("Should detect turns played II", () => {
        expect(turnsPlayed({
            1: false,
            2: false,
            3: false,
            4: false
        })).toEqual(0);
    });


});

describe("turnsPlayed()", () => {

    it("Should detect turns played I ", () => {
        expect(turnsPlayed({
            1: false,
            2: 4,
            3: 6,
            4: 16
        })).toEqual(3);
    });

    it("Should detect turns played II", () => {
        expect(turnsPlayed({
            1: false,
            2: false,
            3: false,
            4: false
        })).toEqual(0);
    });


});