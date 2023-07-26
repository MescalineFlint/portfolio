document.addEventListener('DOMContentLoaded', () => {
    const advantagesQuestion = document.querySelectorAll('.advantages__item-top')
    const faqQuestion = document.querySelectorAll('.faq__item-top')
    const heroBtnList = document.querySelectorAll('.hero__btn')
    const closeBtnList = document.querySelectorAll('.popup__close')
    const popupBtn = document.querySelector('.popup__form-btn')

    advantagesQuestion.forEach(e => {
        e.addEventListener('click', ()=> {
            e.nextElementSibling.classList.toggle('show-advantages')
            console.log(e)
            e.querySelector('.advantages__item-btn').classList.toggle('up')
        })
    })
    faqQuestion.forEach(e => {
        e.addEventListener('click', ()=> {
            e.nextElementSibling.classList.toggle('faq-show')
            e.nextElementSibling.classList.toggle('dn')
            e.querySelector('.faq__item-img').classList.toggle('rotate')
        })
    })


    heroBtnList.forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelector('.popup__main').style.display = 'flex'
        })
    })
    
    closeBtnList.forEach(btn => {
        btn.addEventListener('click', function() {
            btn.closest('.popup').style.display = 'none'
        })
    })

    popupBtn.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.popup__main').style.display = 'none'
        document.querySelector('.popup__thanks').style.display = 'flex'
    })
})