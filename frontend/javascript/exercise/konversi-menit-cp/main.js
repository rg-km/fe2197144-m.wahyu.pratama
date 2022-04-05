/**
 * Konversikan menit pada paramter menjadi satuan jam.
 * Misal: 
 * - 99 menjadi "1:39"
 * - 132 menjadi "2:12"
 * 
 * notes:
 * - type data pada parameter akan selalu INTEGER
 * - type data pada result akan selalu berupa STRING
 */



function konversiMenit(menit) {
  // TODO: answer here
  var result = "";
  if (menit >= 60) {
    var jam = Math.floor(menit / 60);
    var mnt = menit % 60;
    if (mnt >= 10) {
      result = jam+":"+mnt;  
    }
    else{

      result = jam+":0"+mnt;
    }
  }
  else{
    result = 0+":"+menit;
  }
  return result;
}

console.log(konversiMenit(61));
console.log(konversiMenit(94));
console.log(konversiMenit(51));
console.log(konversiMenit(187));

module.exports = konversiMenit;