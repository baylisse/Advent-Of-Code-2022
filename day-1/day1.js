const fs = require('fs');

const data = fs.readFileSync('elf-data.txt', 'utf8'); //use fs to read .txt data
const elves = data.replace(/\r/g, '').split('\n\n')
// removes all the \r characters (yay windows) & split by blank lines
// this will be an array of strings that look like: '5487\n54654\n3451\n' etc

// this is a decently costly operation (nested methods), but works
// creates an array of calorie totals
const calTotals = elves.map((elf) => {
    const calorieNums = elf.split('\n').map(Number); //split strings up on the \n's and turn each element into a number 
    return calorieNums.reduce((acc, curr) => acc + curr, 0);
})

//returning the highest value in the calTotals array
function part1() {
    return Math.max(...calTotals)
}

//console.log(part1());


// using .sort and .slice to get the top three
// would like to convert to a different sort method
function part2() {
    const sorted = calTotals.sort((a, b) => b-a)
    return sorted[0] + sorted[1] + sorted[2]; // just plain adding to reduce comp load
}

//console.log(part2());
