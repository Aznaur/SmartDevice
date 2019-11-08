'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var modal = document.querySelector('.wrapp-modal');
  var modalOpen = document.querySelector('.page-header__link');
  var modalClose = document.querySelector('.modal__close');

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


