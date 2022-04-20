/**
 * Buatlah sebuah fungsi yang menerima dua argumen berupa objek kemudian mengembalikan menjadi satu objek gabungan
 *
 * Contoh: {a: 1, b: 2}, {c: 3, d: 4}
 * Output: {a: 1, b: 2, c: 3, d: 4}
 */
 let  firstObject = {a: 1, b: 2};
 let  secondObject = {c: 3, d: 4};
const mergeTwoObjects = (firstObject, secondObject) => {
  // TODO: answer here
 let result = {};
  for (let key in firstObject) {
    result[key] = firstObject[key];
  }
  for (let key in secondObject) {
    result[key] = secondObject[key];
  }
  return result;
  
};
console.log(mergeTwoObjects(firstObject, secondObject));

module.exports = mergeTwoObjects