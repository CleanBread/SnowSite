'use strict';
(function () {

var xhr = new XMLHttpRequest();
var mass;

xhr.responseType = 'json';

xhr.addEventListener('load', function () {
  console.log(xhr.response);
  mass = xhr.response;
});

xhr.open('GET', 'http://192.168.1.8:3000/port');
xhr.send();
})();