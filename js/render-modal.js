'use strict';
(function () {
    var similarCardTemplate = document.querySelector('#modal-window')
      .content
      .querySelector('.modal');

    window.renderModal = (data) => {
      var newModal = similarCardTemplate.cloneNode(true);
      console.log(data);

      newModal.querySelector('.modal__headline').textContent = data[0].headline;
      newModal.querySelector('.modal__inf').querySelector('.first-line').textContent = data[0].text1;
      newModal.querySelector('.modal__inf').querySelector('.second-line').textContent = data[0].text2;
      newModal.querySelector('.inf__project').querySelector('.client').textContent = data[0].client;
      newModal.querySelector('.inf__project').querySelector('.date').textContent = data[0].date;
      newModal.querySelector('.inf__project').querySelector('.participants').textContent = data[0].share;
      newModal.querySelector('img').src = data[0].image;

      return newModal;
    }
})();