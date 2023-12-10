let count = 0;

// get the #value is id  & .btn is class in html
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// The forEach() method calls a function for each element in an array. The forEach() method is not executed for empty elements.
// Also use call funcations
btns.forEach(function (btn) {
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
