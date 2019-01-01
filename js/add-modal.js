'use strict';
(function () {
    var body = document.querySelector('body');

    window.showModal = () => {   
        var fragment = document.createDocumentFragment();
        for (var i = 0; i < 1; i++) {
          fragment.appendChild(window.renderModal(window.data));
        }
        body.appendChild(fragment);
      };

      
})();