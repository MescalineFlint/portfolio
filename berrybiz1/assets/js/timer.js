document.addEventListener("DOMContentLoaded", () => {
  let mm = localStorage.getItem("mm");
  let ss = localStorage.getItem("ss");
  if (!mm || !ss) {
    mm = "15";
    ss = "00";
    localStorage.setItem("mm", mm);
    localStorage.setItem("ss", ss);

    timerInit();
  } else {
    if (mm.toString().length < 2) mm = "0" + mm;
    if (ss.toString().length < 2) ss = "0" + ss;

    document.querySelector(".timer").innerHTML = `
            <div class="timer__items">
                <span class="timer__item">${mm.toString()[0]}</span>
                <span class="timer__item">${mm.toString()[1]}</span>
            </div>
            <span class="timer__sep">:</span>
            <div class="timer__items">
                <span class="timer__item">${ss.toString()[0]}</span>
                <span class="timer__item">${ss.toString()[1]}</span>
            </div>
        `;

    if (+mm <= 0 && +ss <= 0) {
      console.log("asd");
      document.querySelector(".timer").innerHTML = `
                <div class="timer__items">
                    <span class="timer__item">0</span>
                    <span class="timer__item">0</span>
                </div>
                <span class="timer__sep">:</span>
                <div class="timer__items">
                    <span class="timer__item">0</span>
                    <span class="timer__item">0</span>
                </div>
            `;
      return;
    } else {
      timerInit();
    }
  }

  function timerInit() {
    const interval = setInterval(() => {
      if (mm == 0 && ss == 0) {
        clearInterval(interval);
      }
      if (ss == 0) {
        ss = 59;
        mm--;
      } else {
        ss--;
      }
      if (+mm <= 0 && +ss <= 0) {
        clearInterval(interval);
      }
      if (mm.toString().length < 2) mm = "0" + mm;
      if (ss.toString().length < 2) ss = "0" + ss;

      document.querySelector(".timer").innerHTML = `
                <div class="timer__items">
                    <span class="timer__item">${mm.toString()[0]}</span>
                    <span class="timer__item">${mm.toString()[1]}</span>
                </div>
                <span class="timer__sep">:</span>
                <div class="timer__items">
                    <span class="timer__item">${ss.toString()[0]}</span>
                    <span class="timer__item">${ss.toString()[1]}</span>
                </div>
            `;
      localStorage.setItem("mm", mm);
      localStorage.setItem("ss", ss);
    }, 1000);
  }
});
