$(document).ready(function () {
  let сurrentTime = new Date();
  сurrentTime = сurrentTime.setMinutes(сurrentTime.getMinutes() + 15);
  function timer() {
    let now = new Date();
    let gap = сurrentTime - now;
    let min = Math.floor(gap / 1000 / 60) % 60;
    let sec = Math.floor(gap / 1000) % 60;
    let secSecond = sec % 10;
    let minSecond = min % 10;
    let secFirst = (sec - secSecond) / 10;
    let minFirst = (min - minSecond) / 10;

    if (gap < 0) {
      minFirst = "0";
      secFirst = "0";
      secSecond = "0";
      minSecond = "0";
      clearInterval(id);
    }
    document.querySelector(".start__timer__minut-first").textContent = minFirst;
    document.querySelector(".start__timer__sec-first").textContent = secFirst;
    document.querySelector(".start__timer__minut-second").textContent =
      minSecond;
    document.querySelector(".start__timer__sec-second").textContent = secSecond;
    document.querySelector(".start__timer__minut-first2").textContent =
      minFirst;
    document.querySelector(".start__timer__sec-first2").textContent = secFirst;
    document.querySelector(".start__timer__minut-second2").textContent =
      minSecond;
    document.querySelector(".start__timer__sec-second2").textContent =
      secSecond;
  }
  const id = setInterval(timer, 1000);
});
