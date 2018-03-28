export const currentTurn = (p1, p2) => {
    return turnsPlayed(p1) > turnsPlayed(p2) ? 2 : 1;
}

export const turnsPlayed = (p) => {
    return Object.keys(p).filter(k => p[k] !== false).length;
}

export const gamePoints = (letter) => {
    return {
        'E': 20,
        'F': 30,
        'P': 40,
        'G': 50,
    }[letter];
}

export const gameIsOver = (p1, p2) => {
    return playerHasFinished(p1) && playerHasFinished(p2);
}

export const playerHasFinished = (p) => {
    return Object.keys(p).filter(k => p[k] !== false).length === 0;
}

export const playerPoints = (p) => {
    return Object.keys(p).map(k => isInteger(k) ? k*p[k] : p[k] ? gamePoints(k) : 0);
}

export const generateDices = () => {
    return [generateDice(), generateDice(), generateDice(), generateDice(), generateDice(), generateDice()];
}

export const generateDice = () => {
    // todo
    return Math.floor(Math.random() * 6.99);
}

export const possiblePlayerPlays =  (dices) => {
    return {
        1: countNumber(dices, 1),
        2: countNumber(dices, 2),
        3: countNumber(dices, 3),
        4: countNumber(dices, 4),
        5: countNumber(dices, 5),
        6: countNumber(dices, 6),
        E: possibleStraight(dices),
        F: possibleFull(dices),
        P: possiblePoker(dices),
        G: possibleGenerala(dices)
    };
}

export const countNumber = (dices, number) => {
    return dices.filter(d => d===number).lenght;
}

export const possibleStraight = (dices) => {
    const straights = [
        [1,2,3,4,5],
        [2,3,4,5,6],
        [1,3,4,5,6]
    ];
    return straights.find(s => compareStraights(s, dices)) !== -1 ;
}

export const compareStraights = (s1, s2) => {
    return s1.join('') === s2.join('');
}


export const possibleFull = (dices) => {
    const repetitions = [
        countNumber(dices,1),
        countNumber(dices,2),
        countNumber(dices,3),
        countNumber(dices,4),
        countNumber(dices,5),
        countNumber(dices,6)
    ];

    return repetitions.indexOf(3) !== -1 && repetitions.indexOf(2) !== -1;
}

export const possiblePoker = (dices) => {
    return dices.filter(d => countNumber(dices, d) === 4).length;
}


export const possibleGenerala = (dices) => {
    return dices.filter(d => countNumber(dices, d) === 5).length;
}