$(document).ready(function () {
  $(".slider").slick({
    dots: false,
    arrows: false,
    rows: 2,
    slidesPerRow: 3,
    responsive: [
      {
        breakpoint: 916,
        settings: {
          rows: 3,
          slidesPerRow: 2,
        }
      },
      {
        breakpoint: 695,
        settings: {
          rows: 1,
          slidesPerRow: 1,
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          arrows: true,
          appendArrows: $('.slider__nav'),
          appendDots: $('.slider__nav'),
        }
      },
      {
        breakpoint: 491,
        settings: {
          rows: 1,
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: true,
          appendArrows: $('.slider__nav'),
          appendDots: $('.slider__nav'),
        }
      }
    ]
  });
  
  document.querySelector('.access__form-input').onkeyup = function () {
    var reg = /[а-яА-ЯёЁ]/g;
    if (this.value.search(reg) !=  -1) {
        this.value  =  this.value.replace(reg, '');
    }
  }

  $('.access__form-input').prop('required', true)
  $('.access__form-btn').attr("disabled", "disabled")
  let form = document.querySelector(".access__form");
  let btn = document.querySelector(".access__form-btn");

  let adress = document.location.href
  function checkedFirst() {
    if ($('.access__form-input').val().match(/.+?\@.+/g) && $('#access__check').prop("checked") === true && $('.access__form-input').val().match(/.+?\..+/g)) {
      btn.removeAttribute('disabled')
      btn.classList.remove('disabled')
    }
    else {
        btn.setAttribute('disabled', 'disabled')
        btn.classList.add('disabled')
    }
  }
  function checkedSecond() {
    if ($('.access__form-input').val().match(/.+?\@.+/g) && $('#access__check').prop("checked") === true && $('#access__check-payment').prop("checked") === true && $('.access__form-input').val().match(/.+?\..+/g)) {
      btn.removeAttribute('disabled')
      btn.classList.remove('disabled')
    }
    else {
        btn.setAttribute('disabled', 'disabled')
        btn.classList.add('disabled')
    }
  }
    
    if(adress.includes('utm_medium') == true || adress.includes('utm_compaign') == true) {  
        $('.payment').css('display', 'none')
        $('#access__check').attr("checked", "true")
        $(form).on('change', function() {
            checkedFirst()
        })
        $('.access__form-input').on('input', function() {
            checkedFirst()
        })
    }
    else {
        $(form).on('change', function() {
            checkedSecond()
        })
        $('.access__form-input').on('input', function() {
            checkedSecond()
        })
    
    }

});

