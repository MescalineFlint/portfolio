$(document).ready(function () {
  $(".review__slider").slick({
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 540,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  });

  document.querySelector(".start__form__inp").onkeyup = function () {
    var reg = /[а-яА-ЯёЁ]/g;
    if (this.value.search(reg) != -1) {
      this.value = this.value.replace(reg, "");
    }
  };

  $(".start__input").attr("required", "true");
  $(".start__form__inp").attr("required", "true");
  $(".start__form__btn").attr("disabled", "disabled");

  var startBtn = document.querySelector(".start__form__btn");

  function validateEmail(email) {
    return !!email.match(/.+?\@.+\..+/g);
  }

  function checkForm() {
    if (
      validateEmail($(".start__form__inp").val()) &&
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

  $(".start__form__inp").on("input", function () {
    checkForm();
  });
});
