// Buatlah algoritma menghitung luas persegi panjang

// Analisis:

// Input: p (panjang) dan l (lebar)
// Luas Persegi Panjang  L = p * l

// Algoritma:

// ```
// 1. Masukan nilai panjang
// 2. Masukan nilai lebar
// 3. Rumus untuk menghitung L  yaitu L= p * l
// 4. Nilai  L (Luas) akan dicetak sebagai output ke perangkat output (keluaran)
// ```

const prompt = require('prompt-sync')();
let panjang = prompt('Masukan nilai panjang :');

let lebar = prompt('Masukan nilai lebar : ');

let luas = panjang * lebar;

console.log(luas);