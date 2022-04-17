/**
 * Carilah angka palindrome yang LEBIH BESAR dan TERDEKAT dari angka-angka dibawah ini
 * 
 * Misal:
 * - Jika angka pada parameter bernilai 90 maka angka palindrome terdekat adalah 99
 * - Jika angka pada parameter bernilai 102 maka angka palindrome terdekat adalah 111
 */

function angkaPalindrome(num) {
  // TODO: answer here
  // var index = 0;
  var temp = false;
  do {
    var res = num.toString();
    if (num <= 99) {
      if (res[0] !== res[1]) {
        num++;
      }
      else{
        num = parseInt(res);
        temp = true;
      }  
    }
    else if (num >= 100 && num <= 999){
      if (res[0] !== res[2]) {
        num++;
      }
      else{
        num = parseInt(res);
        temp = true;
      }
    }
    else{

    }
    
  } while (!temp);
  return num;
  
}

console.log(angkaPalindrome(10)); //11
console.log(angkaPalindrome(17)); //22
console.log(angkaPalindrome(175)); //181

module.exports = angkaPalindrome