doc = document;
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//////////////  local storage для SVG  /////////////////////////////////
var request = new XMLHttpRequest();

request.open('GET', './svg/symbol_sprite.html', true);

request.onload = function() {

    if (request.status >= 200 && request.status < 400 ) {
        var node = doc.createElement("div");

        node.innerHTML = request.responseText;
        doc.body.insertBefore(node, doc.body.firstChild);

        localStorage.setItem( 'inlineSVGdata',  request.responseText );
    }
};

request.send();

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//////////////  Открывашка для главного меню  //////////////////////////
var menuToggle = doc.querySelector('.main-nav__toggle');
var menuClosed = doc.querySelector('.main-nav__list');

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
// var sliderItem1 = doc.querySelector('.my-work__item1'),
//     sliderItem2 = doc.querySelector('.my-work__item2'),
//     sliderItem3 = doc.querySelector('.my-work__item3'),
//     nextSlideItem1 = doc.querySelector('.slider__next--barbershop'),
//     backSlideItem1 = doc.querySelector('.slider__back--nerds'),
//     nextSlideItem2 = doc.querySelector('.slider__next--nerds'),
//     backSlideItem2 = doc.querySelector('.slider__back--sedona'),
//     nextSlideItem3 = doc.querySelector('.slider__next--sedona'),
//     backSlideItem3 = doc.querySelector('.slider__back--barbershop'),
//     show = ('my-work__item--show');

// if (nextSlideItem1) {
//     nextSlideItem1.addEventListener('click', function (event) {
//         event.preventDefault();
//         sliderItem1.classList.remove(show);
//         sliderItem2.classList.add(show);
//         sliderItem3.classList.remove(show);
//     });

//     backSlideItem1.addEventListener('click', function (event) {
//         event.preventDefault();
//         sliderItem1.classList.remove(show);
//         sliderItem2.classList.remove(show);
//         sliderItem3.classList.add(show);
//     });

//     nextSlideItem2.addEventListener('click', function (event) {
//         event.preventDefault();
//         sliderItem1.classList.remove(show);
//         sliderItem2.classList.remove(show);
//         sliderItem3.classList.add(show);
//     });

//     backSlideItem2.addEventListener('click', function (event) {
//         event.preventDefault();
//         sliderItem1.classList.add(show);
//         sliderItem2.classList.remove(show);
//         sliderItem3.classList.remove(show);
//     });

//     nextSlideItem3.addEventListener('click', function (event) {
//         event.preventDefault();
//         sliderItem1.classList.add(show);
//         sliderItem2.classList.remove(show);
//         sliderItem3.classList.remove(show);
//     });

//     backSlideItem3.addEventListener('click', function (event) {
//         event.preventDefault();
//         sliderItem1.classList.remove(show);
//         sliderItem2.classList.add(show);
//         sliderItem3.classList.remove(show);
//     });
// }
// Новый варинт сладера:
var
    slides = doc.querySelectorAll('.my-work__list .my-work__item'), // ищем все слайды
    currentSlide = 0,
    next = doc.querySelectorAll('.slider__next'), // ищем кнопки next на всех слайдах
    back = doc.querySelectorAll('.slider__back'); // ищем кнопки back на всех слайдах

if (slides.length > 0) {
   var slideInterval = setInterval(backSlide, 5000); // делаем слайд шоу (если требуется)
}


function nextSlide() { // перелистываение сладера вперед
    goToSlide(currentSlide + 1);
}

function backSlide() { // перелистываение сладера назад
    goToSlide(currentSlide - 1);
}

function goToSlide(n) { // функция перехода на другйо слайд
    slides[currentSlide].className = 'my-work__item'; // убераем первому слайду класс "my-work__item--show"
    currentSlide = (n + slides.length) % slides.length; // вычисляем номер следующего элемента массива
    slides[currentSlide].className = 'my-work__item my-work__item--show'; // добавляем ему класс "my-work__item--show"
}

for (var i = 0; i < next.length; i++) {
    next[i].addEventListener('click', function() {
        nextSlide();
    });
}

for (var i = 0; i < back.length; i++) {
    back[i].addEventListener('click', function() {
        backSlide();
    });
}

// Финкция клика  через JQuery
// $(next).click(function() { // добавляем в дейсвие по клику вызов функции перелистывания слайда вперед
//     nextSlide();
// });

// $(back).click(function() { // добавляем в дейсвие по клику вызов функции перелистывания слайда назад
//     backSlide();
// });

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//////////////  Открывашка для навигации по станицы  ///////////////////
var pageToggle = doc.querySelector('.page-nav__toggle'),
    pageClosed = doc.querySelector('.page-nav__wrap'),
    blog = doc.querySelector('.blog');


if (pageToggle) {
    pageToggle.addEventListener('click', function (event) {
        event.preventDefault();
        pageToggle.classList.toggle('page-nav__toggle--opened');
        pageClosed.classList.toggle('page-nav__wrap--opened');
    });
}

if (pageClosed) {
    pageClosed.addEventListener('click', function (event) {
        pageToggle.classList.remove('page-nav__toggle--opened');
        pageClosed.classList.remove('page-nav__wrap--opened');
    });
}

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//////////////  Валидация формы  ///////////////////////////////////////
// var formElemen = doc.querySelector(".feedback__form");

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

// $(doc).ready(function () {

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

    if (window.location.toString().indexOf('blog.htm') > 0) { // находимся на странице Блог

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
            svgPath = $(svg).find('.who-am-i__icon-autor-photo-body'), // ищем группы в нашем изображении
            svgPos = svg.offset().top, // отслеживаем положение svg от верха страницы
            windowMargin = $(window).height() / 1.5, // задаём запас что бы анимация начаналась заранее, когда останится пол окна
            startAnimate = Math.ceil(wScroll - svgPos + windowMargin), //выставляем точку начала анимации - от общего скрола отнимем позицию картинки и прибавим пол страницы
            pixelsElapsed = svgPos - wScroll, // осталось до svg картинки
            percentsElapsed =  Math.ceil(pixelsElapsed / (svgPos - (svgPos - windowMargin)) * 100), // сколько мы прошли в %
            percentDraw = 600 / 100 * percentsElapsed; // на сколько мы нарисовали изображение в %

        if (startAnimate > 0) { // старт анимации если мы докрутили до нужного места
            svgPath.css({
                'stroke-dashoffset' : percentDraw
            });

            if (percentDraw <= 0) { // отменяем исчезание картинки при дальнейшим скроле
                svgPath.css({
                    'stroke-dashoffset' : 0
                });
            }
        }

        else { // полностью очищаем при обратной прокрутки (оставались баги)
            svgPath.css({
                'stroke-dashoffset' : 600
            });
        }
    }
});

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//////////////  mouse parallax  ////////////////////////////////////////
$(doc).ready(function () {
    
    var layer = $('.parallax').find('.parallax__layer--mouse'); // Выбираем все дивы parallax__layers в parallax

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

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//////////////  scroll parallax  ///////////////////////////////////////
$(window).scroll(function() {
    var wScroll = $(window).scrollTop(), // вычисляем растояние от верха страницы
        layer = $('.parallax').find('.parallax__layer--scroll'); // Выбираем все дивы parallax__layers в parallax

    layer.map(function (key, value) { // Проходимся по всем элементам объекта (дивам .parallax__layers)
        var 
            // bottomPosition = (key / 14), // Вычисляем на сколько нам надо опустить вниз наш слой что бы при перемещении по Y не видно было краев
            scrollPosition = wScroll * (key / 14); // Вычисляем коофицент смешения по Y

            $(value).css({
                'transform': 'translate3d(0, ' + scrollPosition + 'px, 0)', // Используем translate3d для более лучшего рендеринга на странице
            });

            if (scrollPosition > 400) { // если картинка заканчивается
                $(value).css({
                    // 'bottom': '-' + bottomPosition + 'px', // выставляем bottom (т.к. картинка с запасом по низу выравнивание не требуется)
                    'transform': 'translate3d(0, 400px, 0)', // ограничим прокрутку
                });
            }
    });
});

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//////////////  Плавный scroll до элемента страницы  ///////////////////
$('a[href^="#"]').bind('click.smoothscroll', function(e) {  // ищем все ссылки с адресом # 
                                                            // и вешаем обработчик события которое срабатывает при клике мышкой
    e.preventDefault(); // отменяем переход по умолчанию

    var target = this.hash,
        $target = $(target);

    $('html, body').stop().animate(

        {
            'scrollTop': $target.offset().top // позиция элемента от верха страницы
        },

        500, // время анимации

        'swing',

        function() {
            window.location.hash = target;
        }
    );
});

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//////////////  Залисвка скилов  ///////////////////////////////////////

$(window).scroll(function() { // отслеживаем скролл
    var wScroll = $(window).scrollTop(), // измеряем срок от верха страницы
        skills = $('.skills__circle'),
        skillsPos = skills.offset().top, // ищем позицию элемента от верха страницы
        skillsMargin = $(window).height() / 1.8,  // вводим коэффиицент что бы зарисовка начиналась заранее
        startAnimate = Math.ceil(wScroll - skillsPos + skillsMargin); // находим точку начала анимации

    if (startAnimate > 0) { // условие которое дожно выполнятся для старта анимации
        skills.css ({ // изменяем css свойство
            'stroke' : '#00bfa5'
        });
    }

    else {  // пока условие на старт анимации не выпоняется
        skills.css ({ // изменяем css свойство
            'stroke' : 'ccc'
        });
    }
});