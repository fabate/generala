import {turnsPlayed, currentTurn, gamePoints} from "../lib";

describe("currentTurn()", () => {

    it("Should detect Player 2 Turn ", () => {
        expect(currentTurn({
            1: false,
            2: 4,
            3: 6,
            4: 16
        }, {
            1: false,
            2: false,
            3: 6,
            4: 16
        })).toEqual(2);
    });

    it("Should detect Player 1 Turn", () => {
        expect(currentTurn({
            1: false,
            2: false,
            3: false,
            4: false
        }, {
            1: false,
            2: false,
            3: false,
            4: false
        })).toEqual(1);
    });

    it("Should detect Player 1 Turn II ", () => {
        expect(currentTurn({
            1: 3,
            2: 4,
            3: false,
            4: false
        }, {
            1: 2,
            2: 6,
            3: false,
            4: false
        })).toEqual(1);
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

describe("gamePoints()", () => {

    it("Should detect Straight ", () => {
        expect(gamePoints('E')).toEqual(20);
    });

    it("Should detect Full ", () => {
        expect(gamePoints('F')).toEqual(30);
    });

    it("Should detect Straight ", () => {
        expect(gamePoints('P')).toEqual(40);
    });

    it("Should detect Generala ", () => {
        expect(gamePoints('G')).toEqual(50);
    });

});


