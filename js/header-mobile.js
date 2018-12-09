'use strict';
(function () {
    var openMenuBtn = document.querySelector('.navbar_active');
    var closeMenuBtn = document.querySelector('.navbar_cross');
    var mobileMenu = document.querySelector('.navigation');

    openMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.add('show');
    });

    closeMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('show');
    })
})();