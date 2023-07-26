$(document).ready(function() {
    let listPrevBtn = document.querySelectorAll('.question__prev')
    let listNextBtn = document.querySelectorAll('.question__next')
    let listSkipBtn = document.querySelectorAll('.question__skip')
    let listInput = document.querySelectorAll('.test-input')
    let stepProgresLine = 3
    let stepProgresNum = 1


    listSkipBtn.forEach(function(btn) {
        $(btn).click(function () {
            let item = $(this).parent()
            $(item).css('display', 'none')
            item = $(item).next()
            $(item).css('display', 'block')
            if ($(btn).hasClass('question__btn-end')) {
                $(".test-container").css('display', 'none')
                $('.result').css('display', 'block')
                let time = $('.start__timer__minut-first').html() + $('.start__timer__minut-second').html() + $('.start__timer-number__dots').html() + $('.start__timer__sec-first').html() + $('.start__timer__sec-second').html()
                $('.time').html(time)
                $('.time-result').text(time)
            }
            stepProgresLine += 3
            $('.test__progress-line').css('width', stepProgresLine + '%')
            let navBtn = $('.nav-border').next()
            $(navBtn).addClass('nav-border')
            $(navBtn).prev().removeClass('nav-border')
            stepProgresNum = Number($('.test__question-num').html()) + 1
            $('.test__question-num').html(stepProgresNum)
        })
    })
    
    listNextBtn.forEach(function(btn) {
        $(btn).attr('disabled', 'disabled')
        $(btn).addClass('question__btn-hov')
        $(btn).click(function () {
            let item = $(this).parent().parent()
            $(item).css('display', 'none')
            item = $(item).next()
            $(item).css('display', 'block')
            if ($(btn).hasClass('question__btn-end')) {
                $(".test-container").css('display', 'none')
                $('.result').css('display', 'block')
                let time = $('.start__timer__minut-first').html() + $('.start__timer__minut-second').html() + $('.start__timer-number__dots').html() + $('.start__timer__sec-first').html() + $('.start__timer__sec-second').html()
                $('.time').html(time)
                $('.time-result').text(time)
                endTest = true
            }
            stepProgresLine += 3
            $('.test__progress-line').css('width', stepProgresLine + '%')
            let navBtn = $('.nav-border').next()
            $(navBtn).addClass('nav-border')
            $(navBtn).prev().removeClass('nav-border')
            stepProgresNum = Number($('.test__question-num').html()) + 1
            $('.test__question-num').html(stepProgresNum)

        })
    })

    listPrevBtn.forEach(function(prevBtn) {
        $(prevBtn).click(function () {
            let item = $(this).parent().parent()
            $(item).css('display', 'none')
            item = $(item).prev()
            $(item).css('display', 'block')
            stepProgresLine -= 3
            $('.test__progress-line').css('width', stepProgresLine + '%')
            let navBtn = $('.nav-border').prev()
            $(navBtn).addClass('nav-border')
            $(navBtn).next().removeClass('nav-border')
            stepProgresNum = Number($('.test__question-num').html()) -1
            $('.test__question-num').html(stepProgresNum)
        })
    })

    $('.time-out__btn').click(function() {
        $('.time-out').css('display', 'none')
        $('.mail-page').css('display', 'block')
    })

    $('.finish').click(function() {
        $(".result").css('display', 'none')
        $('.mail-page').css('display', 'block')
    })
    $('#back').click(function(){
        $(".result").css('display', 'none')
        $(".test-container").css('display', 'block')
        $(".question1").css('display', 'block')
        $('.test__question-num ').html('1')
        stepProgresNum = 1
        stepProgresLine = 3
        $('.test__progress-line').css('width', stepProgresLine + '%')
        $('.test__nav-btn30').removeClass('nav-border')
        $('.test__nav-btn1').addClass('nav-border')
    })

    listInput.forEach(function(it) {
        $('.question__answer-block').change(function() {

            let element = $(it).next()
            $(element).children('answer-svg')
            $(it).removeClass('red')
            if($(it).is(':checked')) {
                let rootParent = $(it).parents('.question')
                $(rootParent).find('.question__next').removeAttr('disabled')
                $(rootParent).find('.question__next').removeClass('question__btn-hov')
                $(it).parent().toggleClass('red')
                $(element).children().children('.add-class').toggleClass('red')
                if ($(element).children().children('.add-class').hasClass('add-fill')) {
                    $(element).children().children('.add-fill').toggleClass('fill')
                }
            }
            else {
                $(it).parent().removeClass('red')
                $(element).children().children('.add-class').removeClass('red')
                $(element).children().children('.add-fill').removeClass('fill')
            }
        })

        let listQuestion = document.querySelectorAll('.question')
        let listNavBtn = document.querySelectorAll('.test__nav-btn')
        listNavBtn.forEach(function(item) {
            $(item).click(function() {
                listNavBtn.forEach(function(item) {
                    $(item).removeClass('nav-border')
                })
                let num = $(this).html()
                let questionItem = '.question' + num
                listQuestion.forEach(function(e) {
                    $(e).css('display', 'none')
                })
                $(questionItem).css('display', 'block')
                $(item).addClass('nav-border')
                $('.test__question-num').html(num)
                stepProgresLine = 3 * num
                $('.test__progress-line').css('width', stepProgresLine + '%')
            })
        })
    })    

    listInput.forEach(function(item) {
        $(item).click(function() {
            let listNavBtn = document.querySelectorAll('.test__nav-btn')
            let positionBtn = $('.test__question-num').html()
            let nameQuestion = '.test__nav-btn' + positionBtn
            listNavBtn.forEach(function(el) {
                if($(el).find(nameQuestion)) {
                    $(nameQuestion).addClass('nav-btn-check')
                }
            })

        })
    })
    
    $('.get-result__btn').click(function() {
        $('.mail-page').css('display', 'none')
        $('.succes').css('display', 'block')
    })

    $('.form__checkbox-white').click(function() {
        if($(this).children('.form__checkbox-input').is(':checked')) {
            $(this).prev().attr('href', 'pretest.html')
            $(this).prev().css('cursor', 'pointer')
        }
        else {
            $(this).prev().removeAttr('href')
            $(this).prev().css('cursor', 'not-allowed')
        }
    })
    $('.form__checkbox-black').click(function() {
        if($(this).children('.form__checkbox-input').is(':checked')) {
            $(this).next().attr('href', 'pretest.html')
            $(this).next().css('cursor', 'pointer')
        }
        else {
            $(this).next().removeAttr('href')
            $(this).next().css('cursor', 'not-allowed')
        }
    })
})