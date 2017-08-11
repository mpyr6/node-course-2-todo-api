var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos',(req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

// GET /todos/12341234

app.get('/todos/:id', (req,res) => {
  var id = req.params.id;

  //Validate ID using isValid
    // Respond with 404 - send back empty body

  // findById
    // Success
      // if todo - send it back
      // if no todo - send back 404 with empty body
    // Error
      //400 - and send empty body back
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = {app};
