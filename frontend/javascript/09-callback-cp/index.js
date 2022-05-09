// Buatlah callback yang memenuhi function call di line 29

// function ini menduplikasi tiap karakter pada sebuah string
// contoh: hehe => hheehhee
function doubleChars(str) {
  // TODO: answer here
  let Str = str;
  for (let i = 0; i < str.length; i++) {
    Str += str[i] + str[i];
  }
  return Str;
}

// function ini mengulang pengaplikasian callback pada str sejumlah num
function repeat(str, num, cb) {
  // TODO: answer here
  let Str1 = cb(str);
  let Str2 = "";
  for (let i = 0; i < Str1.length; i++) {
    Str2 += Str1[i].repeat(num);
  }
  return Str2;
}

console.log(repeat("triple", 2, doubleChars)); //  ttttrrrriiiipppplllleeee

module.exports = {
  doubleChars,
  repeat,
};