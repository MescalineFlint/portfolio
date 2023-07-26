$(document).ready(function () {
  let arrow = document.querySelector(".progress__img-arrow");
  let btn = document.querySelector(".hero__btn");
  let calcBtn = document.querySelector(".calc__btn");
  let hero = document.querySelector(".hero");
  let help = document.querySelector(".help");
  let menu = document.querySelector(".menu");
  let calc = document.querySelector(".calc");
  let test1 = document.querySelector(".test1");
  let test2 = document.querySelector(".test2");
  let test3 = document.querySelector(".test3");
  let test4 = document.querySelector(".test4");
  let test5 = document.querySelector(".test5");
  let test6 = document.querySelector(".test6");
  let test7 = document.querySelector(".test7");
  let test8 = document.querySelector(".test8");
  let progress = document.querySelector(".progress");
  let test1Btn = document.querySelectorAll(".test1__btn");
  let spinList = document.querySelectorAll(".spinner__desc");


  function spin() {
    for (let i = 1; i <= spinList.length - 1; i++) {
      setTimeout(() => {
        let n = i - 1;
        spinList[n].style.display = "none";
        spinList[i].style.display = "block";
      }, i * 3000);
    }
  }

  function result() {
    document.querySelector(".plan").style.display = "block";
    document.querySelector(".get").style.display = "block";
    document.querySelector(".card").style.display = "block";
    document.querySelector(".test-result").style.display = "none";
  }

  btn.addEventListener("click", function () {
    hero.style.display = "none";
    help.style.display = "none";
    menu.style.display = "none";
    calc.style.display = "none";
    test1.style.display = "flex";
    progress.style.display = "flex";
  });
  calcBtn.addEventListener("click", function () {
    hero.style.display = "none";
    help.style.display = "none";
    menu.style.display = "none";
    calc.style.display = "none";
    test1.style.display = "flex";
    progress.style.display = "flex";
  });

  for (let i = 0; i <= test1Btn.length; i++) {
    $(test1Btn[i]).click(function () {
      test1.style.display = "none";
      test2.style.display = "block";
      arrow.style.transform = "rotate(-26deg)";
      document.querySelector(".proggres__sex").style.display = "none";
      document.querySelector(".proggres__active").style.display = "block";
    });
  }

  var UserData = function UserData() {
    this.data = {
      gender: null,
      activity: null,
      protein: [],
      vegetables: [],
      food: [],
      day: null,
      bad: null,
      age: null,
      height: null,
      weight: null,
      newWeight: null,
    };

    this.handleChange = function (name, value) {
      var _this = this;

      if (name in this.data) {
        this.data[name] = value;
      }
    };

    this.checkKey = function (name) {
      if (this.data[name]) {
        return true;
      }

      return false;
    };
  };

  function verifyCheckboxChecked(arr) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].checked) {
        return true;
      }
    }
  }

  let data = new UserData();
  let gendorButtons = document.querySelectorAll(".test1__sex");
  let activityArr = document.getElementsByName("active");
  let proteinArr = document.querySelectorAll(".protein");
  let vegetablesArr = document.querySelectorAll(".vegetable");
  let foodArr = document.querySelectorAll(".food");
  let dayArr = document.getElementsByName("day");
  let badArr = document.querySelectorAll(".bad");

  $(document.querySelector(".test2__prev")).click(function () {
    test1.style.display = "block";
    test2.style.display = "none";
    arrow.style.transform = "rotate(-50deg)";
    document.querySelector(".proggres__active").style.display = "none";
    document.querySelector(".proggres__sex").style.display = "block";
  });

  $(document.querySelector(".test2__next")).click(function () {
    test2.style.display = "none";
    test3.style.display = "block";
    arrow.style.transform = "rotate(2deg)";
    document.querySelector(".proggres__active").style.display = "none";
    document.querySelector(".proggres__belki").style.display = "block";
  });

  $(document.querySelector(".test3__prev")).click(function () {
    test2.style.display = "block";
    test3.style.display = "none";
    arrow.style.transform = "rotate(-26deg)";
    document.querySelector(".proggres__belki").style.display = "none";
    document.querySelector(".proggres__active").style.display = "block";
  });

  $(document.querySelector(".test3__next")).click(function () {
    test3.style.display = "none";
    test4.style.display = "block";
    arrow.style.transform = "rotate(27deg)";
    document.querySelector(".proggres__belki").style.display = "none";
    document.querySelector(".proggres__veg").style.display = "block";
  });

  $(document.querySelector(".test4__prev")).click(function () {
    test3.style.display = "block";
    test4.style.display = "none";
    arrow.style.transform = "rotate(2deg)";
    document.querySelector(".proggres__veg").style.display = "none";
    document.querySelector(".proggres__belki").style.display = "block";
  });

  $(document.querySelector(".test4__next")).click(function () {
    test4.style.display = "none";
    test5.style.display = "block";
    arrow.style.transform = "rotate(50deg)";
    document.querySelector(".proggres__veg").style.display = "none";
    document.querySelector(".proggres__prod").style.display = "block";
  });

  $(document.querySelector(".test5__prev")).click(function () {
    test4.style.display = "block";
    test5.style.display = "none";
    arrow.style.transform = "rotate(27deg)";
    document.querySelector(".proggres__prod").style.display = "none";
    document.querySelector(".proggres__veg").style.display = "block";
  });

  $(document.querySelector(".test5__next")).click(function () {
    test5.style.display = "none";
    test6.style.display = "block";
    arrow.style.transform = "rotate(78deg)";
    document.querySelector(".proggres__prod").style.display = "none";
    document.querySelector(".proggres__day").style.display = "block";
  });

  $(document.querySelector(".test6__prev")).click(function () {
    test5.style.display = "block";
    test6.style.display = "none";
    arrow.style.transform = "rotate(50deg)";
    document.querySelector(".proggres__day").style.display = "none";
    document.querySelector(".proggres__prod").style.display = "block";
  });

  $(document.querySelector(".test6__next")).click(function () {
    test6.style.display = "none";
    test7.style.display = "block";
    arrow.style.transform = "rotate(102deg)";
    document.querySelector(".proggres__day").style.display = "none";
    document.querySelector(".proggres__bad").style.display = "block";
  });

  $(document.querySelector(".test7__prev")).click(function () {
    test6.style.display = "block";
    test7.style.display = "none";
    arrow.style.transform = "rotate(78deg)";
    document.querySelector(".proggres__bad").style.display = "none";
    document.querySelector(".proggres__day").style.display = "block";
  });

  $(document.querySelector(".test7__next")).click(function () {
    test7.style.display = "none";
    test8.style.display = "block";
    arrow.style.transform = "rotate(133deg)";
    document.querySelector(".proggres__bad").style.display = "none";
    document.querySelector(".proggres__param").style.display = "block";
  });

  $(document.querySelector(".test8__prev")).click(function () {
    test7.style.display = "block";
    test8.style.display = "none";
    arrow.style.transform = "rotate(102deg)";
    document.querySelector(".proggres__param").style.display = "none";
    document.querySelector(".proggres__bad").style.display = "block";
  });

  var startInterval;

  $(document.querySelector(".test8__next")).click(function () {
    test8.style.display = "none";
    progress.style.display = "none";
    document.querySelector(".test-result").style.display = "flex";
    spin();
    setTimeout(result, 15000);
    startInterval = setInterval(timer, 1000);
  });

  let personData = document.getElementsByName("person-data");
  personData.forEach(function (item) {
    item.addEventListener("change", function () {
      if (item.value != "") {
        document.querySelector(".test8__next").style.opacity = "1";
      }

      if (item.id === "age") {
        data.handleChange("age", parseInt(item.value));
      }

      if (item.id === "height") {
        data.handleChange("height", parseInt(item.value));
      }

      if (item.id === "weight") {
        data.handleChange("weight", parseInt(item.value));
      }

      if (item.id === "newWeight") {
        data.handleChange("newWeight", parseInt(item.value));
      }

      //мет возраст
      let mAge = "";
      let mAgeNum = document.querySelector(".met-age");

      let sex = data.gender;
      let age = data.data.age;
      let height = data.data.height;
      let weight = data.data.weight;
      let active = data.data.activity;
      let newWeight = parseInt(data.data.newWeight);

      if (sex === "male") {
        mAge = Math.round(0.629 * age + 18.56);
      } else {
        mAge = Math.round(0.58 * age + 17.24);
      }

      var devision = mAge % 10;
      var ageTag = "лет";

      if (mAge < 21) {
        ageTag = "лет";
      } else if (devision == 1) {
        ageTag = "год";
      } else if (devision > 1 && devision < 5) {
        ageTag = "года";
      } else if (devision > 5) {
        ageTag = "лет";
      }

      if (weight > newWeight) {
        differenceWeight = Math.abs(weight - newWeight) / 3;
        document.querySelector(".second-week").textContent =
          Math.round(weight - differenceWeight) + " кг";
        document.querySelector(".third-week").textContent =
          Math.round(weight - differenceWeight * 2) + " кг";
      }
      if (weight < newWeight) {
        differenceWeight = Math.abs(weight - newWeight) / 3;
        document.querySelector(".second-week").textContent =
          Math.round(weight + differenceWeight) + " кг";
        document.querySelector(".third-week").textContent =
          Math.round(weight + differenceWeight * 2) + " кг";
      }

      document.querySelector(".weight").textContent = weight + " кг";
      document.querySelector(".first-week").textContent = weight + " кг";
      document.querySelector(".dream-weight").textContent = newWeight + " кг";
      document.querySelector(".four-week").textContent = newWeight + " кг";
      mAgeNum.textContent = "".concat(mAge, " ").concat(ageTag);
      //калории
      var call_from = "";
      var call_to = "";
      var call_arrow = "";
      var bmr = "";
      var amr = "";

      if (sex == "male") {
        bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
      } else {
        bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
      }

      if (active == 1) {
        amr = 1.2;
      } else if (active == 2) {
        amr = 1.375;
      } else if (active == 3) {
        amr = 1.55;
      } else if (active == 4) {
        amr = 1.725;
      } else if (active == 5) {
        amr = 1.9;
      }

      call_from = Math.round(bmr * amr - bmr * amr * 0.2);
      call_to = call_from + 100;
      document.querySelector(".cal").textContent = call_from + "-" + call_to;
      //вода

      var l = "";

      if (weight >= 90) {
        if (active == 1) {
          l = 3;
        } else if (active == 2 || active == 3) {
          l = 3.5;
        } else if (active == 4 || active == 5) {
          l = 3.9;
        }
      } else if (weight >= 80) {
        if (active == 1) {
          l = 2.5;
        } else if (active == 2 || active == 3) {
          l = 2.9;
        } else if (active == 4 || active == 5) {
          l = 3.3;
        }
      } else if (weight >= 70) {
        if (active == 1) {
          l = 2.3;
        } else if (active == 2 || active == 3) {
          l = 2.5;
        } else if (active == 4 || active == 5) {
          l = 3;
        }
      } else if (weight >= 60) {
        if (active == 1) {
          l = 1.8;
        } else if (active == 2 || active == 3) {
          l = 2.3;
        } else if (active == 4 || active == 5) {
          l = 2.6;
        }
      } else if (weight >= 50) {
        if (active == 1) {
          l = 1.5;
        } else if (active == 2 || active == 3) {
          l = 2;
        } else if (active == 4 || active == 5) {
          l = 2.3;
        }
      }

      document.querySelector(".water").textContent = "".concat(l, " \u043B");
    });
  });

  let newArrProtein = [];
  let newArrVeg = [];
  let newArrFood = [];
  let newArrBad = [];

  gendorButtons.forEach(function (item) {
    item.addEventListener("click", function () {
      data.handleChange("gender", item.value);
    });
  });
  activityArr.forEach(function (item) {
    item.addEventListener("change", function () {
      data.handleChange("activity", this.value);
      document.querySelector(".test2__next").style.display = "block";
    });
  });
  proteinArr.forEach(function (item) {
    item.addEventListener("change", function () {
      if (!newArrProtein.includes(this.value)) {
        newArrProtein.push(this.value);
        data.handleChange("protein", newArrProtein);
      } else {
        let deleteIndex = newArrProtein.indexOf(this.value);
        newArrProtein.splice(deleteIndex, 1);
      }
      document.querySelector(".test3__next").style.display = "block";
    });
  });

  vegetablesArr.forEach(function (item) {
    item.addEventListener("change", function () {
      if (verifyCheckboxChecked(vegetablesArr)) {
        newArrVeg.push(this.value);
        data.handleChange("vegetables", newArrVeg);
      } else {
        data.handleChange("vegetables", null);
      }
      document.querySelector(".test4__next").style.display = "block";
    });
  });

  foodArr.forEach(function (item) {
    item.addEventListener("change", function () {
      if (verifyCheckboxChecked(foodArr)) {
        newArrFood.push(this.value);
        data.handleChange("food", newArrFood);
      } else {
        data.handleChange("food", null);
      }
      document.querySelector(".test5__next").style.display = "block";
    });
  });

  dayArr.forEach(function (item) {
    item.addEventListener("change", function () {
      data.handleChange("day", this.value);
      document.querySelector(".test6__next").style.display = "block";
    });
  });

  badArr.forEach(function (item) {
    item.addEventListener("change", function () {
      if (verifyCheckboxChecked(badArr)) {
        newArrBad.push(this.value);
        data.handleChange("bad", newArrBad);
        document.querySelector(".test7__next").style.display = "block";
      } else {
        data.handleChange("bad", null);
      }
    });
  });

  var сurrentTime = new Date();
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

      clearInterval(startInterval);
    }
    document.querySelector(".card-sale__minut-first").textContent = minFirst;
    document.querySelector(".card-sale__sec-first").textContent = secFirst;
    document.querySelector(".card-sale__minut-second").textContent = minSecond;
    document.querySelector(".card-sale__sec-second").textContent = secSecond;
  }

  const startBtn = document.querySelector(".card__right-form__btn");
  const formInputClassName = "card__right-form__inp";

  document.querySelector(`.${formInputClassName}`).onkeyup = function () {
    var reg = /[а-яА-ЯёЁ]/g;
    if (this.value.search(reg) != -1) {
      this.value = this.value.replace(reg, "");
    }
  };

  function validateEmail(email) {
    return !!email.match(/.+?\@.+\..+/g);
  }

  function checkForm() {
    if (
      validateEmail($(`.${formInputClassName}`).val()) &&
      $("#offer").prop("checked") === true &&
      $("#payment").prop("checked") === true
    ) {
      startBtn.removeAttribute("disabled");
      startBtn.classList.remove("disabled");
      $(startBtn).css("cursor", "pointer");
    } else {
      startBtn.setAttribute("disabled", "disabled");
      $(startBtn).css("cursor", "default");
      startBtn.classList.add("disabled");
    }
  }

  $("#payment").attr("checked", "true");
  $("#offer").attr("checked", "true");

  $(".card__right-form").on("change", function () {
    checkForm();
  });
  $($(`.${formInputClassName}`)).on("input", function () {
    checkForm();
  });

  const goTopBtn = document.querySelector(".calc__btn");
  let scrollTop = 0;
  window.onscroll = () => {
    scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  };
  goTopBtn.onclick = () => {
    window.scrollTo(0, 0);
  };
});
