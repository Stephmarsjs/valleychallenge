'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the countingValleys function below.
function countingValleys(n, s) {
let valleysTraveled = 0;
let hikersAltitude = 0; 

let sArray = s.split('');

sArray.forEach((step) => {
   if (hikersAltitude === 0 && step === 'D') {
       valleysTraveled++;
   } 
    step === 'D' ? hikersAltitude-- : hikersAltitude++;
});
    return valleysTraveled;
}
countingValleys(8, 'UDDDUD')

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const s = readLine();

    let result = countingValleys(n, s);

    ws.write(result + "\n");

    ws.end();
}
