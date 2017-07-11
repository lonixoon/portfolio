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
    menuClosed.classList.toggle("main-nav__list--opened");
    menuToggle.classList.toggle("main-nav__toggle--active");
});

// menuClosed.addEventListener("click", function (event) {
//     menuClosed.classList.toggle("main-nav__list--opened");
//     menuToggle.classList.toggle("main-nav__toggle--active");
// });

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