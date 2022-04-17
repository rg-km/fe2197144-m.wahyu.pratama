// Diagonal Difference
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
* Complete the 'diagonalDifference' function below.
*
* The function is expected to return an INTEGER.
* The function accepts 2D_INTEGER_ARRAY arr as parameter.
*/

// Full Problem: https://www.hackerrank.com/challenges/diagonal-difference/problem

function diagonalDifference(arr) {
  // Write your code here
  // TODO: answer here
  ltrd = 0
  for (let i = 0; i < arr.length; i++) {
    ltrd += arr[i][i]
  }
  rtld = 0
  j = 0
  for (let i = arr.length-1; i >= 0; i--) {
    rtld += arr[j][i]
    j++
  }
  res = Math.abs(ltrd - rtld)
  return res
}

function main() {
  //var n = parseInt(readLine());
  var a = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
  ]; // override input
  let result = diagonalDifference(a);
  console.log(result);
}

main(); // execute program

module.exports = diagonalDifference