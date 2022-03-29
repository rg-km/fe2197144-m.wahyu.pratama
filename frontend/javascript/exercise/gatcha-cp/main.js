/**
 * Kali ini kamu diminta untuk membuat sebuah game gatcha dengan ketentuan berikut:
 * - diberikan sebuah variable button yang akan mengenerate angka random 1 - 5
 * - jika mendapat angaka 1 maka akan menampilkan "coba lagi ya"
 * - jika mendapat angaka 2 maka akan menampilkan "selamat kamu mendapatkan kupon sebanyak 5"
 * - jika mendapat angaka 3 maka akan menampilkan "selamat kamu mendapatkan kupon sebanyak 15"
 * - jika mendapat angaka 4 maka akan menampilkan "selamat kamu mendapatkan kupon sebanyak 50"
 * - jika mendapat angaka 5 maka akan menampilkan "selamat kamu mendapatkan kupon sebanyak 100"
 * Buatlah Pseudocode beserta codenya menggunakan conditional "switch"
 */

// PSEUDOCODE:
// TODO: answer here

function gatcha(button) {
  // TODO: answer here
  var result = '';
  switch (button) {
    case 1:
      result = 'coba lagi ya';
      break;
    case 2:
      result = 'selamat kamu mendapatkan kupon sebanyak 5';
      break;
    case 3:
      result = 'selamat kamu mendapatkan kupon sebanyak 15';
      break;
    case 4:
      result = 'selamat kamu mendapatkan kupon sebanyak 50';
      break;
    case 5:
      result = 'selamat kamu mendapatkan kupon sebanyak 100';
      break;
  }
  return result;
}

// Create variable button here 
// TODO: answer here
var button = Math.floor(Math.random() * 5) + 1;
console.log(button);
console.log(gatcha(button))

module.exports = gatcha
