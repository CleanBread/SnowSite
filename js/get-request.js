'use strict';

var xhr = new XMLHttpRequest();

xhr.responseType = 'json';

xhr.addEventListener('load', function () {
  console.log(xhr.response);
});

xhr.open('GET', 'http://192.168.0.13:3000/port');
xhr.send();
