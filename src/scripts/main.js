////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//////////////  local storage для SVG  /////////////////////////////////
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
// var formElemen = document.querySelector(".feedback__form");

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//////////////  Визуализация пред загрузки страницы  ///////////////////

// window.addEventListener('load', function() {
//     // console.log("Cтраница полностью готова");
//     $('.page__header, .page__main, .page__footer').css('display', 'flex');
//     $('.preloader').hide();
// });

////////////////////////////////////////////////////////////////////////
////////////// Визуализация пред загрузки страницы /////////////////////
////////////// с отслеживаеним объектов ////////////////////////////////

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
// if (window.location.toString().indexOf('blog.htm')>0) {

//     if ($(window).width() >= 1200) { // разрешение экрана должно быть больше 1200px

//         $(window).scroll(function() {

//             var wScroll = $(window).scrollTop();  // проверка на сколько px мы проскролили страницу
//             var menu = $('.page__static .page-nav__list');
//             var sidebar = $('.page__static .page-nav__wrap');
//             var stickyStart = sidebar.offset().top;  // отслеживаем положение меню от верха страницы
//             var cloneMenu = sidebar.clone();
//             var fixedSidebar = $('.page__fixed .page-nav');


//             if (wScroll >= stickyStart) { // если меню ниже чем верх страницы

//                 if(!fixedSidebar.find('.page-nav__wrap').length) { // проверка есть ли клонированный элемент, если нет
//                     fixedSidebar.append(cloneMenu);  // то вставляем копию меню
//                     menu.hide(); // и прячем статичное меню
//                 }
//             }

//             else {            
//                 fixedSidebar.find('.page-nav__wrap').remove(); // когда скрол меньше чем блок, удаляем фиксированное меню
//                 menu.show(); // и показываем статичное меню
//             }
//         });
//     }
// }
$(window).scroll(function() { // функция отслеживания скрола

    if (window.location.toString().indexOf('blog.htm')>0) { // находимся на странице Блог

        if ($(window).width() >= 1200) { // разрешение экрана должно быть больше 1200px

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
        }
    }
});


////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//////////////  Отрисовка SVG по скролу  ///////////////////////////////
$(window).scroll(function() {

    if (window.location.toString().indexOf('about.htm') > 0) {

        var
            wScroll = $(window).scrollTop(), // слежение скрола от верха документа
            svg = $('.who-am-i__icon-autor-photo'), // ищем изображение
            svgPath = $('.who-am-i__icon-autor-photo-body'), // ищем группы в нашем изображении
            svgPos = svg.offset().top, // отслеживаем положение svg от верха страницы
            windowMargin = $(window).height() / 1.5, // задаём запас что бы анимация начаналась заранее, когда останится пол окна
            startAnimate = Math.ceil(wScroll - svgPos + windowMargin), //выставляем точку начала анимации - от общего скрола отнимем позицию картинки и прибавим пол страницы
            pixelsElapsed = svgPos - wScroll, // осталось до svg картинки
            percentsElapsed =  Math.ceil(pixelsElapsed / (svgPos - (svgPos - windowMargin)) * 100), // сколько мы прошли в %
            percentDraw = 600 / 100 * percentsElapsed; // на сколько мы нарисовали изображение в %

        if (startAnimate > 0) { // старт анимации если мы докрутили до нужного места и ниже
            svgPath.css({
                'stroke-dashoffset' : percentDraw
            });

            if (percentDraw <= 0) { // отменяем исчезание картинки при дальнейшим скроле
                svgPath.css({
                    'stroke-dashoffset' : 0
                });
            }
        }

        if (startAnimate < 0) { // если анимация не началась очищаем значищаем лицо
            svgPath.css({
                'stroke-dashoffset' : 600
            });
        }
    }
});

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//////////////  parallax  ///////////////////////////////////////////////
$(document).ready(function () {
    
    var layer = $('.parallax').find('.parallax__layer'); // Выбираем все дивы parallax__layers в parallax

    $(window).on('mousemove', function (e) {
        var 
            mouse_dx = (e.pageX), // Узнаём положение мышки по Х
            mouse_dy = (e.pageY), // Узнаём положение мышки по У
            // Т.к. мы делим экран на четыре части что бы в центре оказалась точка координат 0, то нам надо знать когда у нас будет -Х и +Х, -Y и +Y
            w05 = (window.innerWidth / 2), // делим экран по х
            h05 = (window.innerHeight / 2), // делим экран по y
            w = w05 - mouse_dx, // Вычисляем для x перемещения
            h = h05 - mouse_dy; // Вычисляем для y перемещения

        layer.map(function (key, value) { // Проходимся по всем элементам объекта (дивам .parallax__layers)
            var 
                // bottomPosition = (h05 * (key / 100)), // Вычисляем на сколько нам надо опустить вниз наш слой что бы при перемещении по Y не видно было краев
                widthPosition = w * (key / 100), // Вычисляем коофицент смешения по X
                heightPosition = h * (key / 100); // Вычисляем коофицент смешения по Y

                $(value).css({
                    // 'bottom': '-' + bottomPosition + 'px', // выставляем bottom (т.к. картинка с запасом по низу выравнивание не требуется)
                    'transform': 'translate3d(' + widthPosition + 'px, ' + heightPosition + 'px, 0)', // Используем translate3d для более лучшего рендеринга на странице
                });
        });
    });
});