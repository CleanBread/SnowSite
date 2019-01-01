var express = require('express');
var MongoClient = require('mongodb').MongoClient;

var app = express();
var db;

app.get('/port', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');

    db.collection('modalWindow').find().toArray((err, docs) => {
        if(err) {
            console.log('error data')
            return res.sendStatus(500);
        }
        res.send(JSON.stringify(docs))
    });
});

MongoClient.connect('mongodb://localhost:27017/modalWindow', (err, database) => {
    if(err) {
        return console.log('error database');
    }
    db = database;
    app.listen(3000, '192.168.1.8');
});

// 192.168.0.13