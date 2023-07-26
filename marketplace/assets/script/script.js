$(document).ready(function () {
  $(".slider").slick({
    adaptiveHeight: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    appendArrows: $(".slider__nav"),
    responsive: [
      {
        breakpoint: 1230,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".course__btn").click(function () {
    if ($(".course__list-cont__mob-bot").hasClass("hide") !== false) {
      $(".course__btn").html("Показать меньше");
    } else {
      $(".course__btn").html("Показать больше");
    }
    $(".course__list-cont__mob-bot").toggleClass("hide");
  });

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
