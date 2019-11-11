'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var modal = document.querySelector('.wrapp-modal');
  var modalOpen = document.querySelector('.page-header__link');
  var modalClose = document.querySelector('.modal__close');
  var formTel = document.querySelector('.form__field-name');
  var satSection = document.querySelector('.menu__js');
  var navList = document.querySelector('.footer-nav__list');
  var element = formTel.querySelector('#tel-field');
  var element2 = document.querySelector('#tel-field');
  var mobileWidth = 767;
  var maskOptions = {
    mask: '+{7}(000)000-00-00'
  };
  var mask = IMask(element, maskOptions);
  var mask = IMask(element2, maskOptions);

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
    }
  };

  var adaptiveJs = function (widthScr) {
    if (screen.width <= widthScr) {
      satSection.addEventListener('click', function () {
        navList.classList.toggle('footer-nav__hidden');
      });
    }
  };

  adaptiveJs(mobileWidth);

  var openPopup = function () {
    modal.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    document.body.classList.add('modal-open');
    document.querySelector('#name-field').focus();
  };

  var closePopup = function () {
    modal.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    document.body.classList.remove('modal-open');
  };

  modalOpen.addEventListener('click', function (evt) {
    evt.preventDefault();
    openPopup();
  });

  modalClose.addEventListener('click', function () {
    closePopup();
  });

  modal.addEventListener('click', function (evt) {
    var target = evt.target;
    if (target === modal) {
      closePopup();
    }
  });
})();
