//-localstorage для SVG-------------------------------------
var request = new XMLHttpRequest();

request.open('GET', './symbol_sprite.html', true);

request.onload = function() {

    if (request.status >= 200 && request.status < 400 ) {
        var node = document.createElement("div");

        node.innerHTML = request.responseText;
        document.body.insertBefore(node, document.body.firstChild);

        localStorage.setItem( 'inlineSVGdata',  request.responseText );
    }

};

request.send();


//-Слайдер---------------------------------------------------
var sliderItem1 = document.querySelector(".my-work__item1");
var sliderItem2 = document.querySelector(".my-work__item2");
var sliderItem3 = document.querySelector(".my-work__item3");
var nextSlideItem1 = document.querySelector(".slider__next--barbershop");
var backSlideItem1 = document.querySelector(".slider__back--nerds");
var nextSlideItem2 = document.querySelector(".slider__next--nerds");
var backSlideItem2 = document.querySelector(".slider__back--sedona");
var nextSlideItem3 = document.querySelector(".slider__next--sedona");
var backSlideItem3 = document.querySelector(".slider__back--barbershop");

nextSlideItem1.addEventListener("click", function (event) {
    event.preventDefault();
    sliderItem1.classList.remove("my-work__item--show");
    sliderItem2.classList.add("my-work__item--show");
    sliderItem3.classList.remove("my-work__item--show");
});

backSlideItem1.addEventListener("click", function (event) {
    event.preventDefault();
    sliderItem1.classList.remove("my-work__item--show");
    sliderItem2.classList.remove("my-work__item--show");
    sliderItem3.classList.add("my-work__item--show");
});

nextSlideItem2.addEventListener("click", function (event) {
    event.preventDefault();
    sliderItem1.classList.remove("my-work__item--show");
    sliderItem2.classList.remove("my-work__item--show");
    sliderItem3.classList.add("my-work__item--show");
});

backSlideItem2.addEventListener("click", function (event) {
    event.preventDefault();
    sliderItem1.classList.add("my-work__item--show");
    sliderItem2.classList.remove("my-work__item--show");
    sliderItem3.classList.remove("my-work__item--show");
});

nextSlideItem3.addEventListener("click", function (event) {
    event.preventDefault();
    sliderItem1.classList.add("my-work__item--show");
    sliderItem2.classList.remove("my-work__item--show");
    sliderItem3.classList.remove("my-work__item--show");
});

backSlideItem3.addEventListener("click", function (event) {
    event.preventDefault();
    sliderItem1.classList.remove("my-work__item--show");
    sliderItem2.classList.add("my-work__item--show");
    sliderItem3.classList.remove("my-work__item--show");
});


 //-Открывашка для главного меню-----------------------------
var menuToggle = document.querySelector(".main-nav__toggle");
var menuClosed = document.querySelector(".main-nav__list");

menuToggle.addEventListener("click", function (event) {
    event.preventDefault();
    menuClosed.classList.toggle("main-nav__list--opened");
    menuToggle.classList.toggle("main-nav__toggle--active");
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        menuClosed.classList.remove("main-nav__list--opened");
        menuToggle.classList.toggle("main-nav__toggle--active");
    }
});


//-Открывашка для навигации по станицы-----------------------
var pageToggle = document.querySelector(".page-nav__toggle");
var pageClosed = document.querySelector(".page-nav__wrap");

pageToggle.addEventListener("click", function (event) {
    event.preventDefault();
    pageToggle.classList.toggle("page-nav__toggle--opened");
    pageClosed.classList.toggle("page-nav__wrap--opened");
});

pageClosed.addEventListener("click", function (event) {
    pageToggle.classList.toggle("page-nav__toggle--opened");
    pageClosed.classList.toggle("page-nav__wrap--opened");
});