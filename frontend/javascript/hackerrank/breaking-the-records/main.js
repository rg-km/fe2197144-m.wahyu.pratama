// Breaking the Records
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */


// Full Problem: https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem

function breakingRecords(scores) {
  // Write your code here
  // TODO: answer here
  result = [0, 0]
  min = scores[0]
  max = 0
  for (let index = 0; index < scores.length-1; index++) {
    // const element = array[index];
    if (scores[index] > scores[index+1]) { // 20 & 4
      if (max < scores[index]) { // 20 < 20
        max = scores[index] //10
      }
      if (min > scores[index+1]) { //5 > 4
        min = scores[index+1] //4
        result[1] += 1 // 2
      }
    }
    else if (scores[index] < scores[index+1]) { // 5 & 20
      if (max < scores[index+1]){ // 10 < 20
        max = scores[index+1] // 20
        result[0] += 1 // 1
      }
      if (min > scores[index]) { // 5 > 5
        min = scores[index+1]
      }
    }
  }
  return result
}

function main() {
  //     var n = parseInt(readLine());
  //     s = readLine().split(' ');
  //     s = s.map(Number);
  var scores = [10, 5, 20, 20, 4, 5, 2, 25, 1]; // override input
  var result = breakingRecords(scores);
  console.log(result.join(' ') + '\n')

}

main(); // execute program

module.exports = breakingRecords