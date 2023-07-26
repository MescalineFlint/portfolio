document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.querySelector(".hero__btn");
  const sale = document.querySelector(".sale");

  startBtn.addEventListener("click", () => {
    window.scrollTo({
      left: 0,
      top: sale.offsetTop,
      behavior: "smooth",
    });
  });

  const findMore = document.querySelector(".find__more");
  const findHiddenItems = document.querySelectorAll(".find__item-mobhidden");

  findMore.addEventListener("click", function () {
    this.classList.add("hidden");
    findHiddenItems.forEach((item) => item.classList.add("active"));
  });

  if (window.innerWidth <= 480) {
    new Swiper(".review-swiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      autoHeight: true,
      pagination: {
        el: ".review-pagination",
        clickable: true,
      },
    });
  }
  var btn = document.querySelector(".form__submit");
  let adress = document.location.href;
  btn.setAttribute("disabled", "disabled");

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
      btn.removeAttribute("disabled");
      btn.classList.remove("disabled");
      $(btn).css("cursor", "pointer");
    } else {
      btn.setAttribute("disabled", "disabled");
      btn.classList.add("disabled");
      $(btn).css("cursor", "default");
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
      btn.removeAttribute("disabled");
      btn.classList.remove("disabled");
      $(btn).css("cursor", "pointer");
    } else {
      btn.setAttribute("disabled", "disabled");
      btn.classList.add("disabled");
      $(btn).css("cursor", "default");
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

  $("#input-submit").click(function (e) {
    e.preventDefault();
    $(".popup").css("zIndex", "99999999");
    $(".popup").addClass("show-popup");
    $(".popup__img").addClass("rotate");
    $(".popup__desc").css("color", "#011936");
    function hidePopup() {
      $(".popup").css("display", "none");
    }
    setTimeout(hidePopup, 5000);
  });
});
