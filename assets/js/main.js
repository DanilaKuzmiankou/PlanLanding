const swiper = new Swiper('.swiper', {
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
});

const swiper2 = new Swiper('.swiper2', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 400,
    // If we need pagination
    pagination: {
        el: '.swiper2-pagination',
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const swiper3 = new Swiper('.swiper-quotes', {
    spaceBetween: 20,
    slideNextClass: 'swiper-quotes-slide-next',
    slidePrevClass: 'swiper-quotes-slide-prev',
    slideActiveClass: 'swiper-quotes-slide-visible',
    pagination: {
        el: '.swiper-quotes-pagination',
        clickable: true
    },
});


const accordions = document.querySelectorAll('.container');

for (let accordion of accordions) {
    accordion.addEventListener('click', function () {
        this.classList.toggle('active')
    })
}

const containerButtons = document.querySelectorAll('.container_button')
for (let btn of containerButtons) {
    btn.addEventListener('click', (event) => {
        event.stopPropagation()
    })
}

const formSubmitButton = document.querySelector('.form_button')
formSubmitButton.addEventListener('click', (event) => {
    event.preventDefault()
    //saving email...
})