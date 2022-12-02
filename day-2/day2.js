const fs = require('fs');

const data = fs.readFileSync('rps-data.txt', 'utf8');
const pairs = data.replace(/\r/g, '').split('\n');
//console.log(pairs);

let score = 0;

const pt1 = () => {
    const possibleScores = {
        'A X': 4,
        'A Y': 8,
        'A Z': 3,
        'B X': 1,
        'B Y': 5,
        'B Z': 9,
        'C X': 7,
        'C Y': 2,
        'C Z': 6
    }

    for (let pair of pairs) {
        score += possibleScores[pair];
    }
}

const pt2 =() => {
    // change the object to reflect dictated outcomes
    const dictatedScores = {
        'A X': 3,
        'A Y': 4,
        'A Z': 8,
        'B X': 1,
        'B Y': 5,
        'B Z': 9,
        'C X': 2,
        'C Y': 6,
        'C Z': 7
    }
    
    for (let pair of pairs) {
        score += dictatedScores[pair];
    }
}

//pt1();
pt2();
console.log(score);