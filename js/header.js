'use strict';
(function () {
    var header = document.querySelector('.header');
    var logo = document.querySelector('.logo__img');
    var logoDark = document.querySelector('.logo__img_active');

    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
            logo.classList.add('hide');
            logoDark.classList.remove('hide');
        } else {
            header.classList.remove('header_active');
            logo.classList.remove('hide');
            logoDark.classList.add('hide');
        }
    }
})();