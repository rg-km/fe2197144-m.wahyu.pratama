// Mini-Max Sum
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

// Full Problem: https://www.hackerrank.com/challenges/mini-max-sum/problem

function miniMaxSum(arr) {
  // Write your code here
  // TODO: answer 
  min = 999
  max = 0
  for (let i = 0; i < arr.length; i++) { // 0
    total = 0
    for (let j = 0; j < arr.length; j++) { // 0
      if (i != j) {  //0 != 1
        total += arr[j]
      }
    }
    console.log(total);
    if (total > max) {
      max = total
    }
    else if (total < min) {
      min = total
    }
  }
  return min+' '+max
}

function main() {
  //arr = readLine().split(' ');
  //arr = arr.map(Number);
  var arr = [1, 2, 3, 4, 5]; // override input
  let result = miniMaxSum(arr);
  console.log(result)
}

main(); // execute program

module.exports = miniMaxSum