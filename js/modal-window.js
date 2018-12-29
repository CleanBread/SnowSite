'use strict';
(function () {
    var modalWindow = document.querySelector(".modal");
    var projectItems = document.querySelector('.projects').querySelectorAll('.item');
    
    projectItems.forEach((item) => {
        item.addEventListener('click', () => {
            modalWindow.classList.add('show');
        });
    });
});