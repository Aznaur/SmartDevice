'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var modal = document.querySelector('.wrapp-modal');
  var modalOpen = document.querySelector('.page-header__link');
  var modalClose = document.querySelector('.modal__close');
  var formTel = document.querySelector('.form__field-name');
  var satSection = document.querySelectorAll('.page-footer__js');
  var pageHeaderScroll = document.querySelector('.page-header__scroll');
  var anchor1 = document.querySelector('#ya1');
  var element = formTel.querySelector('#tel-field-feedback');
  var element2 = document.querySelector('#tel-field');
  var pageHeaderBtn = document.querySelector('.page-header__btn');
  var anchor2 = document.querySelector('#ya2');


  pageHeaderScroll.addEventListener('click', function (evt) {
    evt.preventDefault();
    anchor1.scrollIntoView({
      behavior: 'smooth'
    });
  });

  pageHeaderBtn.addEventListener('click', function () {
    anchor2.scrollIntoView({
      behavior: 'smooth'
    });
  });

  for (var i = 0; i < satSection.length; i++) {
    satSection[i].addEventListener('click', function (evt) {
      var target = evt.target;

      if (target.classList.contains('page-footer__open')) {
        target.classList.remove('page-footer__open');
      } else {
        var openSat = document.querySelector('.page-footer__open');
        if (openSat) {
          openSat.classList.remove('page-footer__open');
        }
        target.classList.add('page-footer__open');
      }
    });
  }

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
