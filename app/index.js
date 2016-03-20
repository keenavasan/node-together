const express = require('express');
const motivations = require('motivations');
const pick_one = require('pick-one');

const app = express();
//const message = motivations(); 

app.get('/', function(request, response) {
  //response.send("hey i like your shoes");
  response.send(pick_one(motivations));
});

module.exports = app;
