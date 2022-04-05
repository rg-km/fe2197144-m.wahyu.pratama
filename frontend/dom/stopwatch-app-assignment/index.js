/*
Uncomment variable dibawah ini untuk mulai mengerjakan. dilarang mengganti nama variable yang dibuat.
*/

// let stopwatch = mendapatkan value dari stopwatch
// let startbtn = tombol untuk memulai stapwatch
// let stopbtn = tombol untuk memberhentikan stopwatch
// let resetbtn = tombol untuk mereset value dari stopwatch

// TODO: answer here

  let stopwatch = document.getElementById("stopwatch");
  let startbtn = document.getElementById("start");
  let stopbtn = document.getElementById("stop");
  let resetbtn = document.getElementById("reset");
  
  let hour = 0;
  let min = 0;
  let sec = 0;
  
  let stoptimer = true;
  
  startbtn.addEventListener("click", start);
  stopbtn.addEventListener("click", stop);
  resetbtn.addEventListener("click", reset);
  setInterval(runTime, 1000);

function start() {
  // TODO: answer here
  if (stoptimer) {
    stoptimer=false;
    runTime();
  }
}

function stop() {
  // TODO: answer here
  if(!stoptimer){
    stoptimer=true;
  }
}

function reset() {
  // TODO: answer here
  hour = 0;
  min = 0;
  sec = 0;
  
  stopwatch.innerHTML = "00:00:00";

}

function runTime() {
  // TODO: answer here
  

  if(!stoptimer){
  
  hour = parseInt(hour);
  min = parseInt(min);
  sec = parseInt(sec);
  
    
    sec++;
   
    if(sec>=60){
      sec=0;
      min++;
    }
      if(min>=60){
        min=0;
        hour++;
      }
      if(sec < 10 || sec == 0) sec = "0" + sec;

      if(min < 10 || min == 0) min = "0" + min;
  
      if(hour < 10 || hour == 0) hour = "0" + hour;
    
      stopwatch.innerHTML = hour + ':' + min + ':' + sec;
    setTimeout("runTime()", 1000);
  }
}


