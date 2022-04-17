// Birthday Cake Candles
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

// Full Problem: https://www.hackerrank.com/challenges/birthday-cake-candles/problem

function birthdayCakeCandles(candles) {
  // Write your code here
	// TODO: answer here
  count = 0
  max = 0
  for (let index = 0; index < candles.length; index++) {
    if (max < candles[index]) {
      max = candles[index]
    }    
  }
  for (let index = 0; index < candles.length; index++) {
    if (candles[index] == max) {
      count++
    }
  }
  return count
}

function main() {
  //var n = parseInt(readLine());
  //ar = readLine().split(' ');
  //ar = ar.map(Number);
  var ar = [3, 2, 1, 3]; // override input
  var result = birthdayCakeCandles(ar);
  console.log(result);

}

main(); // execute program

module.exports = birthdayCakeCandles
