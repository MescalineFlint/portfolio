$(document).ready(function () {
  const formInputClassName = "form__inp";

  document.querySelector(`.${formInputClassName}`).onkeyup = function () {
    var reg = /[а-яА-ЯёЁ]/g;
    if (this.value.search(reg) != -1) {
      this.value = this.value.replace(reg, "");
    }
  };

  let btn = document.querySelector(".form__btn");
  $(btn).css("cursor", "default");

  $(`.${formInputClassName}`).attr("required", "true");
  $("#offer").attr("required", "true");
  $("#offer-mob").attr("required", "true");
  $(".form__btn").attr("disabled", "disabled");

  function validateEmail(email) {
    return !!email.match(/.+?\@.+\..+/g);
  }

  function checkForm() {
    if (
      validateEmail($(`.${formInputClassName}`).val()) &&
      $("#offer").prop("checked") === true &&
      $("#payment").prop("checked") === true
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

  $("#payment").attr("checked", "true");
  $("#offer").attr("checked", "true");

  $(".form__center-left").on("change", function () {
    checkForm();
  });
  $(`.${formInputClassName}`).on("input", function () {
    checkForm();
  });
});
