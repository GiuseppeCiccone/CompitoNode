'use strict';
const express = require('express');

const app = new express();

const prodotti = [
    "bicicletta",
    "automobile",
    "chiave"
];

const fornitori = [
    "cicco",
    "carra",
    "cioppa"
];

app.listen(8000, function () {
    console.log("Ho aperto l'api.");
});

app.get('/prodotti', function(req,res) {
    res.send(prodotti);
});

app.get('/venditori', function(req,res) {
    res.send(fornitori);
});

app.get('*', function(req, res) {
    res.send("Gli endpoint disponibili sono /prodotti, /fornitori");
});
