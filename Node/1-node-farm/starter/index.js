const fs = require('fs');

const input = fs.readFileSync('./txt/input.txt', 'utf-8');
const output = `What we know about avocado is: ${input}`;

const outputFile = fs.writeFileSync('./txt/output.txt', output);
