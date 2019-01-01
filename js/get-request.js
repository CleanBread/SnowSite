'use strict';
(function () {

var xhr = new XMLHttpRequest();
window.data;

xhr.responseType = 'json';

xhr.addEventListener('load', function () {
  window.data = xhr.response;
  window.showModal();
  window.modalActive();
});

xhr.open('GET', 'http://192.168.1.8:3000/port');
xhr.send();
})();