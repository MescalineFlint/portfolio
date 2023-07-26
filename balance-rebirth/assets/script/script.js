$(document).ready(function () {
  let btnStartList = document.querySelectorAll(".start-test");
  let hero = document.querySelector(".hero");
  let keto = document.querySelector(".keto");
  let principles = document.querySelector(".principles");
  let start = document.querySelector(".start");
  let faq = document.querySelector(".faq");
  const testList = document.querySelectorAll(".test");
  const test6 = document.querySelector(".test6");
  const endTestBtn = document.querySelector(".end-test");
  let spinList = document.querySelectorAll(".spinner__desc");
  const questionBlockList = document.querySelectorAll(".test__cont-question");
  const inpParamList = document.querySelectorAll(".test__item-param");
  let value = document.querySelector(".imt__num");
  let circleWeight = document.querySelector(".weight");
  const age = document.querySelector(".test__item-param-age");
  const height = document.querySelector(".test__item-param-growth");
  const weight = document.querySelector(".test__item-param-weight");
  const dreamWeight = document.querySelector(".test__item-param-dream-weight");
  const inpRadio = test6.querySelectorAll(".input-radio");
  const inpActive = document.querySelectorAll(".test__item-inp_radio-active");
  const btnTestList = document.querySelectorAll(".btn-disabled");
  const faqBtnList = document.querySelectorAll(".faq__top");

  faqBtnList.forEach((item) => {
    item.addEventListener("click", function () {
      item.querySelector(".faq__btn").classList.toggle("transform");
      item.nextElementSibling.classList.toggle("show-answer");
    });
  });

  btnTestList.forEach((item) => {
    item.setAttribute("disabled", "disabled");
  });

  questionBlockList.forEach(function (list) {
    list.addEventListener("change", function () {
      let listQuestion = list.getElementsByTagName("input");
      if (verifyCheckboxChecked(listQuestion)) {
        let thisNextBtn = list.parentNode.parentNode.querySelector(".next");
        thisNextBtn.removeAttribute("disabled");
        thisNextBtn.classList.add("active-btn");
      }
    });
  });

  test6.addEventListener("click", function () {
    function checkIsAllParamsFilled() {
      const activeEndBtnClassName = "active-end-btn";

      if (
        verifyCheckboxChecked(inpRadio) &&
        age.value != "" &&
        height.value != "" &&
        weight.value != "" &&
        dreamWeight.value != ""
      ) {
        endTestBtn.removeAttribute("disabled");
        endTestBtn.classList.add(activeEndBtnClassName);
      } else {
        endTestBtn.setAttribute("disabled", "disabled");
        endTestBtn.classList.remove(activeEndBtnClassName);
      }
    }

    inpParamList.forEach(function (inp) {
      inp.addEventListener("input", checkIsAllParamsFilled);
      checkIsAllParamsFilled();
    });
  });

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
    document.querySelector(".imt").style.display = "block";
    document.querySelector(".calories").style.display = "block";
    document.querySelector(".order").style.display = "block";
    document.querySelector(".test-result").style.display = "none";
  }

  btnStartList.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const test1 = document.querySelector(".test1");
      const test1Title = test1.querySelector(".test__question");
      const btnNext = test1.querySelector(".next");
      const inputRadioList = test1.querySelectorAll("input[type='radio']");
      const inputCheckboxList = test1.querySelectorAll(
        "input[type='checkbox']"
      );

      hero.style.display = "none";
      keto.style.display = "none";
      principles.style.display = "none";
      start.style.display = "none";
      faq.style.display = "none";
      test1.style.display = "flex";

      function goToNextTest() {
        test1.style.display = "none";
        test1.nextElementSibling.style.display = "flex";
        test1.nextElementSibling
          .querySelector(".test__question")
          ?.scrollIntoView();
      }

      for (const inputRadio of inputRadioList) {
        inputRadio.addEventListener("click", goToNextTest);
      }

      test1Title.scrollIntoView();
    });
  });

  endTestBtn.addEventListener("click", function () {
    document.querySelector(".test6").style.display = "none";
    document.querySelector(".test-result").style.display = "flex";
    spin();
    setTimeout(result, 15000);
    startInterval = setInterval(timer, 1000);
    document.querySelector(".age").textContent = age.value;
    document.querySelector(".height").textContent = height.value;
    document.querySelector(".weight").textContent = weight.value;
    document.querySelector(".dream-weight").textContent = dreamWeight.value;
  });

  function verifyCheckboxChecked(arr) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].checked) {
        return true;
      }
    }
  }

  let startInterval;

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

      clearInterval(startInterval);
    }
    document.querySelector(".card-sale__minut-first").textContent = minFirst;
    document.querySelector(".card-sale__sec-first").textContent = secFirst;
    document.querySelector(".card-sale__minut-second").textContent = minSecond;
    document.querySelector(".card-sale__sec-second").textContent = secSecond;
  }
  document.querySelector(".form__inp").onkeyup = function () {
    var reg = /[а-яА-ЯёЁ]/g;
    if (this.value.search(reg) != -1) {
      this.value = this.value.replace(reg, "");
    }
  };

  let startBtn = document.querySelector(".form__btn");

  function validateEmail(email) {
    return !!email.match(/.+?\@.+\..+/g);
  }

  function checkForm() {
    if (
      validateEmail($(".form__inp").val()) &&
      $("#offer").prop("checked") === true &&
      $("#payment").prop("checked") === true
    ) {
      startBtn.removeAttribute("disabled");
      startBtn.classList.remove("disabled");
      $(startBtn).css("cursor", "pointer");
    } else {
      startBtn.setAttribute("disabled", "disabled");
      startBtn.classList.add("disabled");
      $(startBtn).css("cursor", "default");
    }
  }

  $("#payment").attr("checked", "true");
  $("#offer").attr("checked", "true");

  $(".form").on("change", function () {
    checkForm();
  });
  $(".form__inp").on("input", function () {
    checkForm();
  });

  var UserData = function UserData() {
    this.data = {
      sex: null,
      active: null,
      age: null,
      height: null,
      weight: null,
      new_weight: null,
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
  let data = new UserData();
  let personData = document.getElementsByName("person-data");
  personData.forEach(function (item) {
    item.addEventListener("change", function () {
      if (item.id === "age") {
        data.handleChange("age", parseInt(item.value));
      } else if (item.id === "height") {
        data.handleChange("height", parseInt(item.value));
      } else if (item.id === "weight") {
        data.handleChange("weight", parseInt(item.value));
      } else if (item.id === "weight2") {
        data.handleChange("new_weight", parseInt(item.value));
      }
      var decimal_places = 2;
      var decimal_factor =
        decimal_places === 0 ? 1 : Math.pow(10, decimal_places);
      circleWeight.textContent = weight.value;

      var _calc =
        Math.ceil(
          (data.data.weight /
            ((data.data.height / 100) * (data.data.height / 100))) *
            100
        ) / 100;
      console.log(_calc);

      value.textContent = _calc;

      //калории
      var call_from = "";
      var call_to = "";
      var bmr = "";
      var amr = "";

      if (data.sex == "male") {
        bmr =
          88.362 +
          13.397 * data.data.weight +
          4.799 * data.data.height -
          5.677 * data.data.age;
      } else {
        bmr =
          447.593 +
          9.247 * data.data.weight +
          3.098 * data.data.height -
          4.33 * data.data.age;
      }

      if (data.data.active == 1) {
        amr = 1.2;
      } else if (data.data.active == 2) {
        amr = 1.375;
      } else if (data.data.active == 3) {
        amr = 1.55;
      } else if (data.data.active == 4) {
        amr = 1.725;
      } else if (data.data.active == 5) {
        amr = 1.9;
      }

      call_from = Math.round(bmr * amr - bmr * amr * 0.2);
      call_to = call_from + 50;
      document.querySelector(".calories__num").textContent = call_to + " ккал";
      let procentCall = Math.floor(call_to / 100);
      document.querySelector(".calories__item-fats").textContent =
        procentCall * 65 + " ккал";
      document.querySelector(".calories__item-proteins").textContent =
        procentCall * 25 + " ккал";
      document.querySelector(".calories__item-carbohydrate").textContent =
        procentCall * 10 + " ккал";
    });
  });

  const list = document.querySelectorAll(".sex__label");

  list.forEach((i) => {
    i.addEventListener("click", function () {
      list.forEach((item) => {
        item.classList.remove("female-check");
        item.classList.remove("male-check");
        if (i.querySelector(".input-sex").checked) {
          if (i.classList.contains("inp-male")) {
            i.classList.add("male-check");
          } else if (i.classList.contains("inp-female")) {
            i.classList.add("female-check");
          }
        }
      });
    });
  });

  inpActive.forEach(function (e) {
    e.addEventListener("click", function () {
      data.handleChange("active", this.value);
    });
  });

  inpRadio.forEach(function (e) {
    e.addEventListener("click", function () {
      data.handleChange("sex", this.value);
    });
  });

  testList.forEach(function (test) {
    let btnPrev = test.querySelector(".prev");
    let btnNext = test.querySelector(".next");
    if (btnPrev) {
      btnPrev.addEventListener("click", function () {
        test.style.display = "none";
        test.previousElementSibling.style.display = "flex";
        if (btnPrev.classList.contains("fist-prev-btn")) {
          test.style.display = "none";
          hero.style.display = "block";
          keto.style.display = "block";
          principles.style.display = "block";
          start.style.display = "block";
          faq.style.display = "block";
        }
      });
    }
    if (btnNext) {
      btnNext.addEventListener("click", function () {
        const testTitle =
          test.nextElementSibling.querySelector(".test__question");

        const inputRadioList = test.nextElementSibling.querySelectorAll(
          "input[type='radio']"
        );

        function goToNextTest() {
          const nextElem = test.nextElementSibling;
          if (!nextElem.nextElementSibling) return;

          nextElem.style.display = "none";
          nextElem.nextElementSibling.style.display = "flex";
          nextElem.nextElementSibling
            .querySelector(".test__question")
            ?.scrollIntoView();
        }

        test.style.display = "none";
        test.nextElementSibling.style.display = "flex";
        testTitle?.scrollIntoView();

        for (const inputRadio of inputRadioList) {
          inputRadio.addEventListener("click", goToNextTest);
        }
      });
    }
  });
});
