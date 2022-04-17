// Buatlah pseudocode untuk mengecek apakah seseorang dapat membuat SIM atau tidak.
// Seseorang diperbolehkan membuat SIM jika usianya lebih besar atau sama dengan 17 tahun.

// TODO: answer here
const prompt = require('prompt-sync')();
let usia = prompt('Masukan usia :');

if(usia >= 17){
    console.log('Dapat membuat SIM');
}else{
    console.log('Tidak dapat membuat SIM');
}