document.addEventListener("DOMContentLoaded", function () {
  let btnStart = document.querySelector(".quiz__start-btn");
  let listPrev = document.querySelectorAll(".quiz__btn-prev");
  let listNext = document.querySelectorAll(".quiz__btn-next");
  let listDisabledBtn = document.querySelectorAll(".dis-attr");
  let listModalClose = document.querySelectorAll(".mod-attr");
  let listSwap = document.querySelectorAll(".swap-attr");
  let listObserve = document.querySelectorAll(".observe-attr");
  let dataPromo = document.querySelector(".data-promo");
  let listSerialize = document.querySelectorAll(".data-serialize");
  let dataChart = document.querySelector(".data-chart");
  let listRadioData = document.querySelectorAll(".data-radio");
  let info5000 = document.querySelector(".five");
  let info10000 = document.querySelector(".ten");

  let inpMail = document.querySelector(".inp-mail");
  let submitBtn = document.querySelector(".btn-green");
  // inpMail.setAttribute('id','input-email')
  // submitBtn.setAttribute('id','input-submit')

  info10000.setAttribute("data-info", "10000");
  info5000.setAttribute("data-info", "5000");
  dataChart.setAttribute("data-chart", "");
  dataPromo.setAttribute("data-promo", "");
  btnStart.setAttribute("data-start", "");

  listPrev.forEach(function (item) {
    item.setAttribute("data-prev", "");
  });
  listNext.forEach(function (item) {
    item.setAttribute("data-next", "");
  });
  listDisabledBtn.forEach(function (item) {
    item.setAttribute("disabled", "");
  });
  listModalClose.forEach(function (item) {
    item.setAttribute("data-modal-close", "");
  });
  listSwap.forEach(function (item) {
    item.setAttribute("data-swap-back", "");
  });
  listObserve.forEach(function (item) {
    item.setAttribute("data-observer", "");
  });
  listSerialize.forEach(function (item) {
    item.setAttribute("data-serialize", "");
  });
  listRadioData.forEach(function (item) {
    item.setAttribute("data-radio", "");
  });

  let modal = document.querySelector(".plan__modal");
  let modalBtn = document.querySelector(".popup-btn");
  let modalInputList = document.querySelectorAll(".popup-inp");
  modal.addEventListener("click", function () {
    modalInputList.forEach(function (item) {
      item.addEventListener("click", function () {
        modalBtn.removeAttribute("disabled");
      });
    });
  });

  let modalCheck = document.querySelector(".checkbox__input");
  let modalLabel = document.querySelector(".plan__footer-checkbox ");
  modalLabel.addEventListener("click", function () {
    if (modalCheck.checked) {
      submitBtn.removeAttribute("disabled");
    } else {
      submitBtn.setAttribute("disabled", "disabled");
    }
  });

  let startBtn = document.querySelector("#input-submit");

  function checkForm() {
    if (
      $("#offer").prop("checked") === true ||
      $("#payment").prop("checked") === true
    ) {
      startBtn.removeAttribute("disabled");
    } else {
      startBtn.setAttribute("disabled", "disabled");
    }
  }

  startBtn.removeAttribute("disabled");
  $("#payment").attr("checked", "true");
  $("#offer").attr("checked", "true");

  checkForm();
});
