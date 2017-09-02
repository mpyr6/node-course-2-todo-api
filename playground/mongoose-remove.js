const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.fidnByIdAndRemove

Todo.findOneAndRemove({_id: ''}).then((todo) => {

});

Todo.findByIdAndRemove('59a8fd9ae187aea898bc4e86').then((todo) => {
  console.log(todo);
});
