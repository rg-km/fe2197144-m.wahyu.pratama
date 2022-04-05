/*
Uncomment variable dibawah ini untuk mulai mengerjakan. dilarang mengganti nama variable yang dibuat.
*/

// let newGameBtn = tombol untuk melakukan restart game
// let randomNumber = generate random number dari 1 sampai 10
// let message = element untuk menampilkan pesan
// let displayScore = element untuk menampilkan score
// let input = element untuk memasukan data
// let checkBtn = tombol untuk melakuan pengecekan angka pada input
// let score = nilai yang akan ditampilakan


// TODO: answer here
let newGameBtn = document.getElementById("new-game");
let randomNumber = Math.floor(Math.random() * 10 + 1);
let message = document.getElementById("message");
let displayScore = document.getElementById("display-score");
let input = document.getElementById("guess-input");
let checkBtn = document.getElementById("check");
let score = 0;
let number = document.getElementById("number");

checkBtn.addEventListener("click", checkNumber);
newGameBtn.addEventListener("click", resetGame);

function displayMessage(msg) {
// TODO: answer here
message.innerHTML = msg;
}

function resetGame() {
// TODO: answer here
location.reload();
//dilarang menghapus code dibawah ini!
document.getElementById('hidden-number').innerHTML = randomNumber
}

function checkNumber() {
  randomNumber = Math.floor(Math.random() * 10 + 1);
  let guess = parseInt(input.value);
  console.log(guess);
  console.log(randomNumber);
  if (guess === randomNumber) {
    displayMessage("You guessed it!");
    score++;
    displayScore.innerHTML = score;
  } else if (guess > randomNumber) {
    displayMessage("Too High!");
  } else {
    displayMessage("Too Low!");
  }
  number.innerHTML = randomNumber;
}


//dilarang menghapus code dibawah ini!
document.getElementById('hidden-number').innerHTML = randomNumber