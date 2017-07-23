////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//////////////  local storage для SVG  //////////////////////////////////
var request = new XMLHttpRequest();

request.open('GET', './svg/symbol_sprite.html', true);

request.onload = function() {

    if (request.status >= 200 && request.status < 400 ) {
        var node = document.createElement("div");

        node.innerHTML = request.responseText;
        document.body.insertBefore(node, document.body.firstChild);

        localStorage.setItem( 'inlineSVGdata',  request.responseText );
    }
};

request.send();

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//////////////  Открывашка для главного меню  //////////////////////////
var menuToggle = document.querySelector('.main-nav__toggle');
var menuClosed = document.querySelector('.main-nav__list');

if (menuToggle) {
    menuToggle.addEventListener('click', function (event) {
        event.preventDefault();
        menuClosed.classList.toggle('main-nav__list--opened');
        menuToggle.classList.toggle('main-nav__toggle--active');
    });
}

window.addEventListener('keydown', function(event) {
    if (event.keyCode === 27) {
        menuClosed.classList.remove('main-nav__list--opened');
        menuToggle.classList.toggle('main-nav__toggle--active');
    }
});

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//////////////  Слайдер  ///////////////////////////////////////////////
var sliderItem1 = document.querySelector('.my-work__item1');
var sliderItem2 = document.querySelector('.my-work__item2');
var sliderItem3 = document.querySelector('.my-work__item3');
var nextSlideItem1 = document.querySelector('.slider__next--barbershop');
var backSlideItem1 = document.querySelector('.slider__back--nerds');
var nextSlideItem2 = document.querySelector('.slider__next--nerds');
var backSlideItem2 = document.querySelector('.slider__back--sedona');
var nextSlideItem3 = document.querySelector('.slider__next--sedona');
var backSlideItem3 = document.querySelector('.slider__back--barbershop');
var show = ('my-work__item--show');

if (nextSlideItem1) {
    nextSlideItem1.addEventListener('click', function (event) {
        event.preventDefault();
        sliderItem1.classList.remove(show);
        sliderItem2.classList.add(show);
        sliderItem3.classList.remove(show);
    });

    backSlideItem1.addEventListener('click', function (event) {
        event.preventDefault();
        sliderItem1.classList.remove(show);
        sliderItem2.classList.remove(show);
        sliderItem3.classList.add(show);
    });

    nextSlideItem2.addEventListener('click', function (event) {
        event.preventDefault();
        sliderItem1.classList.remove(show);
        sliderItem2.classList.remove(show);
        sliderItem3.classList.add(show);
    });

    backSlideItem2.addEventListener('click', function (event) {
        event.preventDefault();
        sliderItem1.classList.add(show);
        sliderItem2.classList.remove(show);
        sliderItem3.classList.remove(show);
    });

    nextSlideItem3.addEventListener('click', function (event) {
        event.preventDefault();
        sliderItem1.classList.add(show);
        sliderItem2.classList.remove(show);
        sliderItem3.classList.remove(show);
    });

    backSlideItem3.addEventListener('click', function (event) {
        event.preventDefault();
        sliderItem1.classList.remove(show);
        sliderItem2.classList.add(show);
        sliderItem3.classList.remove(show);
    });

}

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//////////////  Открывашка для навигации по станицы  ///////////////////
var pageToggle = document.querySelector('.page-nav__toggle');
var pageClosed = document.querySelector('.page-nav__wrap');

if (pageToggle) {
    pageToggle.addEventListener('click', function (event) {
        event.preventDefault();
        pageToggle.classList.toggle('page-nav__toggle--opened');
        pageClosed.classList.toggle('page-nav__wrap--opened');
    });
}

if (pageClosed) {
    pageClosed.addEventListener('click', function (event) {
        pageToggle.classList.toggle('page-nav__toggle--opened');
        pageClosed.classList.toggle('page-nav__wrap--opened');
    });
}

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//////////////  Валидация формы  ///////////////////////////////////////
var formElemen = document.querySelector(".feedback__form");

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//////////////  Визуализация пред загрузки страницы  ///////////////////
// $(document).ready(function () {

//     $(function () {
//         var imgs = []; // выводим адрес изображений в виде массива

//         $.each($('*'), function () { // цикл поиска всех элементов на странице
//             var $this = $(this),
//                 background = $this.css('background-image'), // ищем в css фоны всех элементов (включая элементы у которых фон none)
//                 img = $this.is('img'); // проверяем на соответствия элемента тегу img

//             if (background !='none') { // если фон не равен none то
//                 var path = background.replace('url("', ''). replace('")', ''); // убираем лишние символы

//                 imgs.push(path); // и сохраняем в массив
//             }

//             if (img) { 
//                 var path = $this.attr('src'); // если элемент изображение, сохраняем его отрибут src

//                 if (path) {
//                     imgs.push(path); // если scr не пустой, сохраняем в массив
//                 }
//             }
//         });

//         var percent = 1;

//         for (var i = 0; i < imgs.length; i++) { // цикл для который проходит по массиву imgs
//             var image = $('<img>', { // создаём картинку
//                 attr: { // передаём атрибуты
//                     src : imgs[i]
//                 }
//             });

//             image.on('load', function() { // обработчик загрузки
//                 setPercent(imgs.length, percent); // изменяем ширину в соответствии с %
//                 percent++; // запускаем цикл
//             });
//         }

//         function setPercent(total, curent) { // считаем проценты загрузки
//             var percent = Math.ceil(curent / total * 100); // формула для расчёта процентов(Math.ceil округляет до целого в большую сторону)

//             if (percent >=100) {
//                 $('.page__header').css('display', 'flex');
//                 $('.page__main').css('display', 'flex');
//                 $('.page__footer').css('display', 'flex');
//                 $('.preloader').hide();
//             }

//             $('.preloader__bar').css({ // выбираем элемент прелодер
//                 // 'width' : percent + '%' // меняем значение шири на получившийся %
//             }).text(percent + '%'); // выводим % в тексте
//         }
//     });
// });
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//////////////  Приклеенное боковое меню  //////////////////////////////
if (window.location.toString().indexOf('blog.htm')>0) {

    if ($(window).width() >= 1200) {

        $(window).scroll(function() { // разрешение экрана должно быть больше 1200px

            var wScroll = $(window).scrollTop();  // проверка на сколько px мы проскролили страницу
            var menu = $('.page__static .page-nav__list');
            var sidebar = $('.page__static .page-nav__wrap');
            var stickyStart = sidebar.offset().top;  // отслеживаем положение меню от верха страницы
            var cloneMenu = sidebar.clone();
            var fixedSidebar = $('.page__fixed .page-nav');


            if (wScroll >= stickyStart) { // если меню ниже чем верх страницы

                if(!fixedSidebar.find('.page-nav__wrap').length) { // проверка есть ли клонированный элемент, если нет
                    fixedSidebar.append(cloneMenu);  // то вставляем копию меню
                    menu.hide(); // и прячем статичное меню
                }
            }

            else {            
                fixedSidebar.find('.page-nav__wrap').remove(); // когда скрол меньше чем блок, удаляем фиксированное меню
                menu.show(); // и показываем статичное меню
            }
        });
    }
}

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//////////////  Визуализация пред загрузки страницы  ///////////////////

window.addEventListener('load', function() {
    // console.log("Cтраница полностью готова");
    $('.page__header, .page__main, .page__footer').css('display', 'flex');
    $('.preloader').hide();
});