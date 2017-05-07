var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/myproject';
// Use connect method to connect to the server

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  
users = db.collection('users');

  console.log("Connected successfully to DB");
});

exports.addUser = function(user,callback) {
	console.log('here in mongo.js')
	users.insert(user,function(err,doc){
		callback(doc);
	});
}