// Grading Students
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

// Full Problem: https://www.hackerrank.com/challenges/grading/problem

function gradingStudents(grades) {
  // Write your code here
  // TODO: answer here
  temp = 0
  for (let index = 0; index < grades.length; index++) {
    if (grades[index] > 37) {
      temp = grades[index] // 38
      bool = true
      while (bool) {
        if (grades[index] % 5 == 0) { // 40 % 5 = 0
          bool = false
        }
        else{
          grades[index]++ //38+1 = 40
        }  
      }
      if (grades[index] - temp > 2) { //40 - 38 = 2
        grades[index] = temp
      }
    }
  }
  return grades
}

function main() {
  //     var n = parseInt(readLine());
  //     var grades = [];
  //     for(var grades_i = 0; grades_i < n; grades_i++){
  //        grades[grades_i] = parseInt(readLine());
  //     }
  var grades = [73, 67, 38, 33]; // override input
  var result = gradingStudents(grades);
  console.log(result.join("\n"));
}

main(); // execute program

module.exports = gradingStudents