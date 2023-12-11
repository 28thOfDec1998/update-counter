// stopWatch js
let seconds = 0;
let milSecond = 0;
let interval;

let appendSeconds = document.getElementById("seconds");
let appendMilseconds = document.getElementById("milseconds");

let = startBtn = document.getElementById("btn-start");
let = resetBtn = document.getElementById("btn-reset");
let = stopBtn = document.getElementById("btn-stop");

function start() {
  interval = setInterval(startTimer, 10);
}
function reset() {
  seconds = "00";
  milSecond = "00";
  appendSeconds.innerHTML = seconds;
  appendMilseconds.innerHTML = milSecond;
}

function stop() {
  clearInterval(interval);
}

function startTimer() {
  milSecond++;

  if (milSecond <= 9) {
    appendMilseconds.innerHTML = "0" + milSecond;
  }

  if (milSecond > 9) {
    appendMilseconds.innerHTML = milSecond;
  }

  if (milSecond > 99) {
    console.log("seconds");
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    milSecond = 0;
    appendMilseconds.innerHTML = "0" + 0;
  }

  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }
}

// counter js
let count = 0;

// get the #value is id  & .btn is class in html
const value = document.querySelector("#value");
const countButtons = document.querySelectorAll(".btn");

// The forEach() method calls a function for each element in an array. The forEach() method is not executed for empty elements.
// Also use call funcations
countButtons.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    const styles = event.currentTarget.classList;
    if (styles.contains("neg")) {
      count--;
    } else if (styles.contains("pos")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    }

    if (count < 0) {
      value.style.color = "red";
    }

    if (count == 0) {
      value.style.color = "black";
    }

    value.textContent = count;
  });
});

// Clock js code

function currentTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if (hh === 0) {
    hh = 12;
  }
  if (hh > 12) {
    hh = hh - 12;
    session = "PM";
  }

  //  (condition ? if true : if false);
  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  //  let time = hh + ":" + mm + ":" + ss + " " + session;

  // document.getElementById("clock").innerText = time;
  document.getElementById("hrs").innerHTML = hh;
  document.getElementById("min").innerHTML = mm;
  document.getElementById("sec").innerHTML = ss;
  document.getElementById("ap").innerHTML = session;

  let t = setTimeout(function () {
    currentTime();
  }, 1000);
}

currentTime();
