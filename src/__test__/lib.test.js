import {turnsPlayed, currentTurn, gamePoints, gameIsOver, playerHasFinished,
        playerPoints, generateDices, generateDice} from "../lib";

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

describe("gameIsOver()", () => {

    it("Should detect game Is Over ", () => {
        expect(gameIsOver({1:1},{1:3})).toEqual(true);
    });

    it("Should detect game Is Not Over ", () => {
        expect(gameIsOver({1:1},{1:false})).toEqual(false);
    });

    it("Should detect game Is Not Over II", () => {
        expect(gameIsOver({1:false},{1:false})).toEqual(false);
    });

});


describe("playerHasFinished()", () => {

    it("Should detect player finished ", () => {
        expect(playerHasFinished({1:1})).toEqual(true);
    });

    it("Should detect player not finished ", () => {
        expect(playerHasFinished({1:false})).toEqual(false);
    });
    
    it("Should detect player not finished II", () => {
        expect(playerHasFinished({1:false, 2:4, 3: 9})).toEqual(false);
    });
});


describe("playerPoints()", () => {

    it("Should calculate player points I", () => {
        expect(playerPoints({1:3})).toEqual(3);
    });

    it("Should calculate player points II", () => {
        expect(playerPoints({1:3, 2: 5, 3: false})).toEqual(13);
    });

    it("Should calculate player points I", () => {
        expect(playerPoints({1:3, 5:5 , 'E': 20, 'G':50})).toEqual(98);
    });

});


describe("generateDices()", () => {

    it("Should generate dices", () => {
        expect(Array.isArray(generateDices())).toBe(true);
        expect(generateDices().length).toBe(5);
    });

});

