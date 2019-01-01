'use strict';
(function () {
    window.modalActive = () => {
        var modalWindow = document.querySelector(".modal");
        var projectItems = document.querySelector('.projects').querySelectorAll('.item');
        var body = document.querySelector('body');
        var closeBtn = document.querySelector('.modal__close');

        projectItems.forEach((item) => {
            item.addEventListener('click', () => {
                modalWindow.classList.add('show');
                body.style.overflow = 'hidden'
            });
        });
     body.addEventListener('keydown', (evt) => {
            if(evt.keyCode === 27) {
                modalWindow.classList.remove('show');
                body.style.overflow = 'auto'
            }
        });
        closeBtn.addEventListener('click', () => {
            modalWindow.classList.remove('show');
            body.style.overflow = 'auto'
        })
    }
})();