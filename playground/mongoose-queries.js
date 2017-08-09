const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5989477e8d4cff6c0543870211';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not Valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todos', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by id', todo);
// }).catch((e) => console.log(e));

var id = '59894e9a82ded9b2a05cbd9e';

User.findById(id).then((user) => {
  if(!user) {
    return console.log('User not found');
  }
  console.log('User by id', user);
}).catch((e) => console.log(e));
