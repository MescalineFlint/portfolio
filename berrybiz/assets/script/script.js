$(document).ready(function () {
  $(".slider").slick({
    adaptiveHeight: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(window)
    .on("resize", function (e) {
      // Переменная, по которой узнаем запущен слайдер или нет.
      var initLib = $(".library-slider").data("init-slider");

      if (window.innerWidth < 541) {
        // Если слайдер не запущен
        if (initLib != 1) {
          // Запускаем слайдер и записываем в data init-slider = 1
          $(".health__list")
            .slick({
              arrows: true,
              dots: true,
              slidesToShow: 1,
              slidesToScroll: 1,
            })
            .data({ "init-slider": 1 });
        }
      }
      // Если десктоп
      else {
        // Если слайдер запущен
        if (initLib == 1) {
          // Разрушаем слайдер и записываем в data init-slider = 0
          $(".health__list").slick("unslick").data({ "init-slider": 0 });
        }
      }
    })
    .trigger("resize");
  document.querySelector(".form__inp").onkeyup = function () {
    var reg = /[а-яА-ЯёЁ]/g;
    if (this.value.search(reg) != -1) {
      this.value = this.value.replace(reg, "");
    }
  };

  $(".form__inp").attr("required", true);
  $(".form__btn").attr("disabled", "disabled");
  $(".form__inp").attr("id", "input-email");
  $(".form__btn").attr("id", "input-submit");
  var startBtn = document.querySelector(".form__btn");
  let adress = document.location.href;

  function checkedFirst() {
    if (
      $(".form__inp")
        .val()
        .match(/.+?\@.+/g) &&
      $("#offer").prop("checked") === true &&
      $(".form__inp")
        .val()
        .match(/.+?\..+/g)
    ) {
      startBtn.removeAttribute("disabled");
      startBtn.classList.remove("disabled");
    } else {
      startBtn.setAttribute("disabled", "disabled");
      startBtn.classList.add("disabled");
    }
  }

  function checkedSecond() {
    if (
      $(".form__inp")
        .val()
        .match(/.+?\@.+/g) &&
      $("#offer").prop("checked") === true &&
      $("#payment").prop("checked") === true &&
      $(".form__inp")
        .val()
        .match(/.+?\..+/g)
    ) {
      startBtn.removeAttribute("disabled");
      startBtn.classList.remove("disabled");
    } else {
      startBtn.setAttribute("disabled", "disabled");
      startBtn.classList.add("disabled");
    }
  }

  if (
    adress.includes("utm_medium") == true ||
    adress.includes("utm_compaign") == true
  ) {
    $(".payment").css("display", "none");
    $("#offer").attr("checked", "true");
    $(".form").on("change", function () {
      checkedFirst();
    });
    $(".form__inp").on("input", function () {
      checkedFirst();
    });
  } else {
    $(".form").on("change", function () {
      checkedSecond();
    });
    $(".form__inp").on("input", function () {
      checkedSecond();
    });
  }

  // $("#input-submit").click(function (e) {
  //   e.preventDefault();
  //   $(".popup").css("zIndex", "99999999");
  //   $(".popup").addClass("show-popup");
  //   $(".popup__img").addClass("rotate");
  //   $(".popup__desc").css("color", "#011936");
  //   function hidePopup() {
  //     $(".popup").css("display", "none");
  //   }
  //   setTimeout(hidePopup, 5000);
  // });
});
