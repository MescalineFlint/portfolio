$(document).ready(function () {
  const formInputClassName = "start__form__inp";

  $(".slider").slick({});

  let btnList = document.querySelectorAll(".slider__btn");
  btnList.forEach(function (item) {
    $(item).click(function () {
      $(item).prev(".review__wrapper").toggleClass("hide");
      if ($(item).prev(".review__wrapper").hasClass("hide")) {
        item.textContent = "Читать далее";
        item.style.backgroundImage = "url('../images/arr-bot.png')";
      } else {
        item.textContent = "Скрыть";
        item.style.backgroundImage = "none";
      }
    });
  });

  document.querySelector(`.${formInputClassName}`).onkeyup = function () {
    var reg = /[а-яА-ЯёЁ]/g;
    if (this.value.search(reg) != -1) {
      this.value = this.value.replace(reg, "");
    }
  };

  let startBtn = document.querySelector(".start__form__btn");
  $(".start__input").attr("required", "true");
  $(`.${formInputClassName}`).attr("required", "true");
  $(".start__form__btn").attr("disabled", "disabled");

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
    } else {
      startBtn.setAttribute("disabled", "disabled");
      startBtn.classList.add("disabled");
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
