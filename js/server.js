var express = require('express');

var app = express();

var mass = [
    {
        headline: 'Video Project',
        text1: 'Nullam lobortis neque turpis, nec tempus sem pharetra at. Donec et quam, ullamcorper velit. Aliquam maximus ullamcorper ligula, at placerat dui hendrerit sed. Sed metus urna, bibendum id tortor, feugiat ipsum. Aliquam vehicula neque sit amet dolor malesuada pretium.',
        text2: 'Curabitur tristique, felis ut mattis auctor, elit ante laoreet libero, ac lorem quam vitae libero. Suspen disse aliquet eget risus quis vehicula.',
        image: '../images/portfolio-4-video-thumb.jpg',
        client: 'Anna Doe',
        date: '	06.20.2016',
        share: 'Facebook, Twitter, Pinterest'
    }
];



app.get('/port', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    res.send(JSON.stringify(mass));
});

app.listen(3000, '192.168.1.8');
// 192.168.0.13