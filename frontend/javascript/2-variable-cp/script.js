// Menukar variabel a dan b dengan operator matematika
const prompt = require('prompt-sync')();
let a = prompt('Masukan variabel pertama: ');
let b = prompt('Masukan variabel kedua: ');

// TODO: answer here
let temp = a;

a = b;
b = temp;
console.log(`Nilai a setelah ditukar: ${a}`);
console.log(`Nilai b setelah ditukar: ${b}`);