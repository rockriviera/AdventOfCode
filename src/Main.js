let fs = require('fs');
input=fs.readFileSync(`${__dirname}/input.txt`, 'utf-8');

let instructions = input.split(',').map(Number);
//Changing values in index 1 and 2 according to AoC instructions.
instructions[1] = 12;
instructions[2] = 2;
for (let i = 0; i < instructions.length; i += 4) {
    let opcode = instructions[i];
    let value1 = instructions[instructions[i + 1]];
    let value2 = instructions[instructions[i + 2]];
    let outputPosition = instructions[i + 3];
    switch (opcode) {
        case 1:
            sum = value1 + value2;
            instructions[outputPosition] = sum;
            break;
        case 2:
            product = value1 * value2;
            instructions[outputPosition] = product;
            break;
        case 99:
            return console.log(`Opcode 99 detected,stopping program.\nResult:${instructions[0]}`);
        default:
            return console.log(`Error: Unexpected opcode in index ${i}`);
    }
}