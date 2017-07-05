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

 //-Открывашка для главного меню-----------------------------
var menuToggle = document.querySelector(".main-nav__toggle");
var menuClosed = document.querySelector(".main-nav__list");

menuToggle.addEventListener("click", function (event) {
    event.preventDefault();
    // menuClosed.classList.toggle("main-nav__list--closed");
    menuClosed.classList.toggle("main-nav__list--opened");
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










// var loginFormOpened = document.querySelector(".main-nav__login");
// var loginForm = document.querySelector(".login-form");
// var loginFormClosed = document.querySelector(".login-form__closed");

// var formSubmit = document.querySelector(".form__submit");
// var formSubmitted = document.querySelector(".form__submitted");
// var formSubmittedClose = document.querySelector(".form__submitted-close");


// loginFormOpened.addEventListener("click", function (event) {
//     event.preventDefault();
//     loginForm.classList.add("login-form--opened");
//     menuClosed.classList.remove("main-nav--opened");
//     menuClosed.classList.add("main-nav--closed");
// });
// loginFormClosed.addEventListener("click", function (event) {
//     event.preventDefault();
//     loginForm.classList.toggle("login-form--opened");
// });


// formSubmit.addEventListener("click", function (event) {
//     event.preventDefault();
//     formSubmitted.classList.add("form__submitted--open");
// });

// formSubmittedClose.addEventListener("click", function (event) {
//     event.preventDefault();
//     formSubmitted.classList.remove("form__submitted--open");
// });


