
// Header - выпадающие списки и скролл

document.querySelectorAll(".dropdown__simplebar").forEach(dropdown => {
  new SimpleBar(dropdown, {
    /* чтобы изначально ползунок был виден */
    autoHide: false,
    /* с помощью этого значения вы можете управлять высотой ползунка*/
    scrollbarMaxSize: 25,
    ariaLabel: 'Скролл по списку',
  });
})

const btns = document.querySelectorAll(".menu__btn");
const dropdowns = document.querySelectorAll(".dropdown");

btns.forEach(item => {
  item.addEventListener("click", function () {
    let DropThis = this.parentElement.querySelector(".dropdown");
    dropdowns.forEach(el => {
      if (el != DropThis) {
        el.classList.remove("dropdown__active")
      }
    });
    btns.forEach(el => {
      if (el != this) {
        el.classList.remove("btn__active")
      }
    });
    DropThis.classList.toggle("dropdown__active");
    this.classList.toggle("btn__active");
  })
})


// Header и hero и каталог - плавный переход по ссылкам
jQuery(document).ready(function () {
  jQuery("a.scrollto").click(function () {
    elementClick = jQuery(this).attr("href")
    destination = jQuery(elementClick).offset().top - 20;
    jQuery("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 700);
    return false;
  });
});


// Галерея - селект
const element1 = document.querySelector('.gallery-select');
const choices1 = new Choices(element1, {
  searchEnabled: false,
  shouldSort: false,
  // placeholder: true,
});



// Галерея - слайдер
let swiper = new Swiper('.gallery-swiper', {
  navigation: {
    nextEl: '.gallery-button-next',
    prevEl: '.gallery-button-prev',
  },

  loop: true,
  slidesPerView: 1,
  slidesPerGroup: 1,

  spaceBetween: 50,

  pagination: {
    el: '.gallery-pagination',
    type: 'fraction',
  },

  a11y: {
    slideLabelMessage: 'Слайд номер {{index}} из {{slidesLength}}',
    paginationBulletMessage: 'Перейти к слайду номер {{index}}',
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },

  breakpoints: {
    // when window width is >= 400px
    400: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },

    // when window width is >= 1450px
    1450: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  }
})

// Галерея - модальные окна

const modalController = ({modal, btnOpen, btnClose, time = 300}) => {
  const buttonElems = document.querySelectorAll(btnOpen);
  const modalElem = document.querySelector(modal);

  modalElem.style.cssText = `
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: opacity ${time}ms ease-in-out;
  `;

  const closeModal = event => {
    const target = event.target;

    if (
      target === modalElem ||
      (btnClose && target.closest(btnClose)) ||
      event.code === 'Escape'
      ) {

      modalElem.style.opacity = 0;

      setTimeout(() => {
        modalElem.style.visibility = 'hidden';
      }, time);

      window.removeEventListener('keydown', closeModal);
    }
  }

  const openModal = () => {
    modalElem.style.visibility = 'visible';
    modalElem.style.opacity = 1;
    window.addEventListener('keydown', closeModal)
  };

  buttonElems.forEach(btn => {
    btn.addEventListener('click', openModal);
  });

  modalElem.addEventListener('click', closeModal);
};

modalController({
  modal: '.gallery-modal-overlay-1',
  btnOpen: '.gallery-link-1',
  btnClose: '.gallery-modal-close'
});

modalController({
  modal: '.gallery-modal-overlay-2',
  btnOpen: '.gallery-link-2',
  btnClose: '.gallery-modal-close'
});

modalController({
  modal: '.gallery-modal-overlay-3',
  btnOpen: '.gallery-link-3',
  btnClose: '.gallery-modal-close'
});

modalController({
  modal: '.gallery-modal-overlay-4',
  btnOpen: '.gallery-link-4',
  btnClose: '.gallery-modal-close'
});

modalController({
  modal: '.gallery-modal-overlay-5',
  btnOpen: '.gallery-link-5',
  btnClose: '.gallery-modal-close'
});

modalController({
  modal: '.gallery-modal-overlay-6',
  btnOpen: '.gallery-link-6',
  btnClose: '.gallery-modal-close'
});







// Каталог - аккордион

$(".accordion").accordion({
  heightStyle: "content",
  active: 0,
  collapsible: true,
  event: "Enter click",
  icons: false,
});

$('.ul-accordion-header').attr('tabindex', '0');




// Каталог - меняющийся контент при нажатии на кнопку-ссылку

let tabsBtn = document.querySelectorAll('.catalog-link');
let tabsBtn_2 = document.querySelectorAll('.catalog__item-nothing-left');
let tabsItem = document.querySelectorAll('.catalog-left');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) {
      btn.classList.remove("catalog-link--active")
    });
    // прошлись по всем кнопкам и удалили активный класс

    e.currentTarget.classList.add("catalog-link--active");
    // прошлись по всем элементам и снова добавили активный класс при нажатии на кнопку: e

    tabsItem.forEach(function (el) {
      el.classList.remove('catalog-left--active')
    });
    // прошлись по всем текстам и удалили активный класс


    document.querySelector(`[data-target="${path}"]`).classList.add('catalog-left--active');
    // прошлись по всем текстам и добавили активный класс при активной кнопке с тем же номером data
  });
});

tabsBtn_2.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) {
      btn.classList.remove("catalog__item-nothing-left--active")
    });
    // прошлись по всем кнопкам и удалили активный класс

    e.currentTarget.classList.add("catalog__item-nothing-left--active");
    // прошлись по всем элементам и снова добавили активный класс при нажатии на кнопку: e

    tabsItem.forEach(function (el) {
      el.classList.remove('catalog-left--active')
    });
    // прошлись по всем текстам и удалили активный класс


    document.querySelector(`[data-target="${path}"]`).classList.add('catalog-left--active');
    // прошлись по всем текстам и добавили активный класс при активной кнопке с тем же номером data
  });
});



// События  - слайдер-2

let swiper_2 = new Swiper('.developments-swiper', {
  loop: true,
  slidesPerView: 1,
  slidesPerGroup: 1,

  spaceBetween: 50,

  navigation: {
    // prevEl: '.developments-button-prev',
    nextEl: '.developments-button-next',
  },

  pagination: {
    el: '.developments-pagination',
    type: 'bullets',
    clickable: true,
  },

  a11y: {
    slideLabelMessage: 'Слайд номер {{index}} из {{slidesLength}}',
    paginationBulletMessage: 'Перейти к слайду номер {{index}}',
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },

  breakpoints: {
    // when window width is >= 750px
    750: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },

    // when window width is >= 1020px
    1020: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 27,
    },

    // when window width is >= 1450px
    1450: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },

  }


})


// Проекты - слайдер-3
let swiper_3 = new Swiper('.projects-swiper', {
  loop: true,
  slidesPerView: 1,
  slidesPerGroup: 1,

  spaceBetween: 50,


  navigation: {
    prevEl: '.projects-button-prev',
    nextEl: '.projects-button-next',
  },

  a11y: {
    slideLabelMessage: 'Слайд номер {{index}} из {{slidesLength}}',
    paginationBulletMessage: 'Перейти к слайду номер {{index}}',
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },

  breakpoints: {
    // when window width is >= 400px
    400: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
    },

    // when window width is >= 1450px
    1450: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  }
})



// Контакты - маскирование формы
var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);

// Контакты - валидация формы
const validate = new window.JustValidate('#contacts-form');
const validation = new JustValidate('#contacts-form');

validation
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели имя, не менее 3 букв',
    },

    {
      rule: 'minLength',
      value: 3,
    },

    {
      rule: 'maxLength',
      value: 30,
    },

  ])
  .addField('#tel', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели телефон',
    },
    {
      validator: function (name, value) {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      },
      errorMessage: 'Номер должен содержать 10&nbsp;цифр',
    },
  ])


// Контыкты - карта

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("mymap_1", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [55.758468, 37.601088],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 14,
  });

  // // Создание геообъекта со своим типом
  var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'location.svg',
    iconImageSize: [20, 20],
    // iconImageOffset: [-15, -27]
  });

  // // Размещение геообъекта на карте.
  myMap.geoObjects.add(myPlacemark);
}



// Header - burger
let burger = document.querySelector('.burger')
let menu = document.querySelector('.nav')
let menuLinks = document.querySelectorAll('.nav__item-link')


burger.addEventListener('click', function () {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('nav--active');
  document.body.classList.toggle('stop-scroll');
})

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('burger--active');
    menu.classList.remove('nav--active');
    document.body.classList.remove('stop-scroll');
  })
})



// Header - форма поиска
let search = document.querySelector('.seach-form__btn')
let searchForm = document.querySelector('.seach-form-tablet')
let cross = document.querySelector('.search-form-tablet__cross')

search.addEventListener('click', function () {
  searchForm.classList.toggle('seach-form-tablet--active')
})


cross.addEventListener('click', function () {
  searchForm.classList.remove('seach-form-tablet--active')
})
