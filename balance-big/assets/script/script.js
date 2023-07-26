$(document).ready(function () {
  let sexBtnList = document.querySelectorAll(".item1__btn");
  let slider = document.querySelector(".slider");
  let navSlider = document.querySelector(".nav-slider");
  let mainItem = document.querySelector(".main-item");
  let item2 = document.querySelector(".item2");
  let lastBacktBtn = document.querySelector(".prev");
  let getResultBtn = document.querySelector(".next");
  let getPlanBtn = document.querySelector(".start__form__btn");
  let age = document.querySelector(".item20__item-param-age");
  let height = document.querySelector(".item20__item-param-growth");
  let weight = document.querySelector(".item20__item-param-weight");
  let newWeight = document.querySelector(".item20__item-param-dream-weight");
  let circleWeight = document.querySelector(".get__circle-weight_num");
  let water = document.querySelector(".water");
  let value = document.querySelector(".person__imt");
  let valueDesc = document.querySelector(".person__imt-desc");
  let itemParamList = document.querySelectorAll(".item20__item-param");
  let oneClickList = document.querySelectorAll(".one-click");

  const formInputClassName = "start__form__inp";

  let item18InputMan = document.querySelectorAll(
    ".item18 .man-list .item-inp-check"
  );
  let item18InputWoman = document.querySelectorAll(
    ".item18 .woman-list .item-inp-check"
  );


  sexBtnList.forEach(function (item) {
    $(item).click(function () {
      item2.style.display = "block";
      slider.style.display = "block";
      navSlider.style.display = "flex";
      mainItem.style.display = "none";
      data.sex = item.value;
      if (data.sex === "male") {
        $(".man-list").css("display", "flex");
        $(".woman-list").css("display", "none");
        $(".item16-man").css("display", "flex");
        $(".item16-woman").css("display", "none");
      } else {
        $(".woman-list").css("display", "flex");
        $(".man-list").css("display", "none");
        $(".item16-man").css("display", "none");
        $(".item16-woman").css("display", "flex");
      }
      window.scrollTo(0, 0);
    });
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

  item18InputMan.forEach(function (item) {
    item.addEventListener("change", function () {
      data.handleChange("active", this.value);
      console.log(data);
    });
  });
  item18InputWoman.forEach(function (item) {
    item.addEventListener("change", function () {
      data.handleChange("active", this.value);
      console.log(data);
    });
  });

  const allInputsCheck = document.querySelectorAll(".item-inp-check");
  const nextBtn = document.querySelectorAll(".slick-next");

  nextBtn.forEach((btn) => {
    btn.disabled = true;
    if (!btn.parentElement.parentElement.classList.contains("item")) {
      btn.disabled = false;
    }
  });

  allInputsCheck.forEach((input) => {
    input.addEventListener("click", inputClick);
  });
  oneClickList.forEach(function (item) {
    let checkList = item.querySelectorAll(".item-inp-check");
    checkList.forEach(function (check) {
      $(check).click(function () {
        $(item).css("display", "none");
        $(item).next().css("display", "block");
      });
    });
  });

  function inputClick(e) {
    if (e.currentTarget.checked) {
      let btn18 =
        e.currentTarget.parentElement.parentElement.parentElement.parentElement.querySelector(
          ".slick-next"
        );
      btn =
        e.currentTarget.parentElement.parentElement.parentElement.querySelector(
          ".slick-next"
        );
      btn18.disabled = false;
      btn.disabled = false;
      for (let i = 2; i <= 19; i++) {
        let item = ".item" + i;
        let prevBtn = item + " " + ".slick-prev";
        let nextBtn = item + " " + ".slick-next";

        $(nextBtn).click(function () {
          $(this).parent().parent().css("display", "none");
          item = ".item" + (i + 1);
          $(item).css("display", "block");
          window.scrollTo(0, 0);
        });
        $(prevBtn).click(function () {
          $(this).parent().parent().css("display", "none");
          item = ".item" + (i - 1);
          $(item).css("display", "block");
          window.scrollTo(0, 0);
        });
      }
    } else {
      btn.disabled = true;
    }
  }

  getResultBtn.disabled = true;
  itemParamList.forEach(function (item) {
    item.addEventListener("input", function () {
      if (
        height.value != "" &&
        age.value != "" &&
        weight.value != "" &&
        newWeight.value != ""
      ) {
        getResultBtn.disabled = false;
      }
    });
  });

  $(getResultBtn).click(function () {
    $(".item20").css("display", "none");
    $(".section-slider").css("margin-bottom", "30px");
    $(".load").css("display", "flex");
    setTimeout(hideLoad, 10500);
    animateCreation();
  });
  $(lastBacktBtn).click(function () {
    $(".item20").css("display", "none");
    $(".item19").css("display", "block");
  });

  function hideLoad() {
    $(".load").css("display", "none");
    $(".result").css("display", "flex");
  }

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

      if (_calc <= 16) {
        valueDesc.textContent = "Ваш ИМТ " + "Выраженный дефицит массы тела";
      } else if (_calc > 16 && _calc <= 18.5) {
        valueDesc.textContent =
          "Ваш ИМТ " + "Недостаточная (дефицит) масса тела";
      } else if (_calc > 18.5 && _calc <= 24.99) {
        valueDesc.textContent = "Ваш ИМТ " + "Норма";
      } else if (_calc > 24.99 && _calc <= 35) {
        valueDesc.textContent = "Ваш ИМТ " + "Ожирение";
      } else if (_calc > 35) {
        valueDesc.textContent = "Ваш ИМТ " + "Ожирение резкое";
      }

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
      }

      call_from = Math.round(bmr * amr - bmr * amr * 0.2);
      call_to = call_from + 100;
      document.querySelector(".person__item-cal").textContent =
        call_from + "-" + call_to;
      //вода

      var l = "";

      if (data.data.weight >= 90) {
        if (data.data.active == 1) {
          l = 3;
        } else if (data.data.active == 2 || data.data.active == 3) {
          l = 3.5;
        } else if (data.data.active == 4 || data.data.active == 5) {
          l = 3.9;
        }
      } else if (data.data.weight >= 80) {
        if (data.data.active == 1) {
          l = 2.5;
        } else if (data.data.active == 2 || data.data.active == 3) {
          l = 2.9;
        } else if (data.data.active == 4 || data.data.active == 5) {
          l = 3.3;
        }
      } else if (data.data.weight >= 70) {
        if (data.data.active == 1) {
          l = 2.3;
        } else if (data.data.active == 2 || data.data.active == 3) {
          l = 2.5;
        } else if (data.data.active == 4 || data.data.active == 5) {
          l = 3;
        }
      } else if (data.data.weight >= 60) {
        if (data.data.active == 1) {
          l = 1.8;
        } else if (data.data.active == 2 || data.data.active == 3) {
          l = 2.3;
        } else if (data.data.active == 4 || data.data.active == 5) {
          l = 2.6;
        }
      } else if (data.data.weight >= 50) {
        if (data.data.active == 1) {
          l = 1.5;
        } else if (data.data.active == 2 || data.data.active == 3) {
          l = 2;
        } else if (data.data.active == 4 || data.data.active == 5) {
          l = 2.3;
        }
      }
      water.textContent = "".concat(l, "\u043B");
    });
  });

  function animateCreation() {
    let creationSuccess = document.querySelector(".creation__success");
    let loader = document.querySelector(".fill-box__line");
    let loaderInner = document.querySelector(".fill-box");
    let percent = document.querySelector(".fill-box__progress");
    let textArr = document.querySelectorAll(".creation__text");
    let delay = +(10000 / textArr.length).toFixed();
    let counter = 0;
    let index = 0;
    percent.textContent = "0";
    let percentTimeout = setTimeout(function tick() {
      counter++;
      percent.textContent = "".concat(counter, "%");
      percentTimeout = setTimeout(tick, 96);

      if (counter >= 100) {
        clearTimeout(percentTimeout);
      }
    }, 96);
    textArr[index].classList.add("active");
    let animSuccess = document.querySelector(".creation__success");
    let textTimeout = setTimeout(function slide() {
      if (textArr[index] && textArr[index].classList.contains("active")) {
        textArr[index].classList.remove("active");
      }

      index++;

      if (textArr[index]) {
        textArr[index].classList.add("active");
      }

      textTimeout = setTimeout(slide, delay);

      if (index >= textArr.length) {
        clearTimeout(textTimeout);
        setTimeout(function () {
          nextSection();
        }, 500);
        busy = false;
        loader.style.strokeDasharray = "765.48";
        loader.classList.remove("load-animation");
        loaderInner.style.display = "none"; // animSuccess.style.display = "block";
        // if (creationSuccess.classList.contains('censor')) {
        //     nextSection();
        // }
      }
    }, delay);
  }

  $(`.${formInputClassName}`).prop("required", true);
  $(`.${formInputClassName}`).prop("type", "email");
  $(".start__form__btn").attr("disabled", "disabled");

  document.querySelector(`.${formInputClassName}`).onkeyup = function () {
    var reg = /[а-яА-ЯёЁ]/g;
    if (this.value.search(reg) != -1) {
      this.value = this.value.replace(reg, "");
    }
  };

  var startBtn = document.querySelector(".start__form__btn");

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
      startBtn.classList.add("disabled");
      $(startBtn).css("cursor", "default");
    }
  }

  $("#payment").attr("checked", "true");
  $("#offer").attr("checked", "true");

  $(".start__form").on("change", function () {
    checkForm();
  });
  $(`.${formInputClassName}`).on("input", function () {
    checkForm();
  });
});
