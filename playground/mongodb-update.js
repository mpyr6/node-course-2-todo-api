// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // findOneAndUpdate
  // db.collection('Todos').findOneAndUpdate({
  //     _id: new ObjectID('59794b20979cb2d0f26127e6')
  //   }, {
  //     $set: {
  //       completed: true
  //     }
  //   }, {
  //     returnOriginal: false
  //   }).then((result) => {
  //     console.log(result);
  //   });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5975865cf65d600342c88d7a')
  }, {
    $set: {
      name: 'Chris Wiesen'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });



  // db.close();
});

// Use this command to run the server, then open new tab!
// npm run mongod
