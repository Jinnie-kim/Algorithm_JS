// 입력 값이 여러 줄 일때

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const firstOperand = input[0].split('');
const secondOperand = input[1].split('');
const a = Number(firstOperand) * Number(secondOperand[2]);
const b = Number(firstOperand) * Number(secondOperand[1]);
const c = Number(firstOperand) * Number(secondOperand[0]);

console.log(a);
console.log(b);
console.log(c);
console.log(a + 10 * b + 100 * c);
