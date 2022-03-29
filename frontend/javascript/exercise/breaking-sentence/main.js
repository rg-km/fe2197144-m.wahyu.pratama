/**
 * Akseslah setiap kata yang terdapat dalam kalimat dibawah dan tampilkan setiap katanya.
 * kali ini kamu wajib menggunakan built-in function subtring untuk mengakses tiap katanya.
 */

var word = 'wow i will become frontend developer';
var exampleFirstWord = word.substring(0, 3);
var secondWord = word.substring(4, 5)
var thirdWord  = word.substring(6, 10)
var fourthWord = word.substring(11, 17)
var fifthWord  = word.substring(18, 26)
var sixthWord  = word.substring(27, 36)

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);
console.log('Sixth Word: ' + sixthWord);